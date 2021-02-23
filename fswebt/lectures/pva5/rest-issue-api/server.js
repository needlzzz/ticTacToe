const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost/issuetracker';
const ISSUE_COLLECTION_NAME = 'issues';
const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

const validIssueStatus = {
  New: true,
  Open: true,
  Assigned: true,
  Fixed: true,
  Verified: true,
  Closed: true,
};

const issueFieldType = {
  status: 'required',
  owner: 'required',
  effort: 'optional',
  title: 'required',
};

// GET /api/issues
app.get('/api/issues', async (req, res) => {
  const issues = await db.collection('issues').find({}).toArray();
  const metadata = { total_count: issues.length };
  res.json({ _metadata: metadata, issues: issues });
});

// GET /api/issues/:id
app.get('/api/issues/:id', async (req, res) => {
  const issue = await db.collection('issues').findOne({ id: Number(req.params.id) });
  if (issue) {
    res.json({ issue: issue });
  } else {
    res.status(404).json({ message: `Issue with ID ${req.params.id} not found` });
  }
});

// DELETE /api/issues/:id
app.delete('/api/issues/:id', async (req, res) => {
  const result = await db.collection('issues').deleteOne({ id: Number(req.params.id) });
  if (result.deletedCount === 1) {
    res.status(200).send();
  } else {
    res.status(404).json({ message: `Issue with ID ${req.params.id} not found` });
  }
});

// POST /api/issues/:id
app.post('/api/issues', async (req, res) => {
  const newIssue = req.body;
  const err = validateIssue(newIssue)
  if (err) {
    res.status(400).json({ message: `Invalid request: ${err}` });
    return;
  }

  newIssue.created = new Date();
  newIssue.id = await getNextSequence('issues');
  const result = await db.collection('issues').insertOne(newIssue);
  if (result.insertedCount !== 1) {
    res.status(500).json({ message: `Failed to insert issue with ID ${newIssue.id}` });
    return;
  }
  const savedIssue = await db.collection('issues').findOne({ _id: result.insertedId });
  res.status(201).json(savedIssue);
});

// PUT /api/issues/:id
app.put('/api/issues/:id', async (req, res) => {
  const updateIssue = req.body;
  const result = await db.collection('issues').updateOne({id: Number(req.params.id) }, {$set: updateIssue});
  if (result.modifiedCount !== 1) {
    res.status(500).json({ message: `Failed to update issue with ID ${updateIssue.id}` });
    return;
  }
  res.status(200).json(updateIssue);
});

async function connectToDb() {
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log('Connected to MongoDB at', url);
  db = client.db();
}

function validateIssue(issue) {
  for (const field in issueFieldType) {
    const type = issueFieldType[field];
    if (type === 'required' && !issue[field]) {
      return `${field} is required.`;
    }
  }

  if (!validIssueStatus[issue.status]) {
    return `${issue.status} is not a valid status.`;
  }

  return null;
}

async function getNextSequence(name) {
  const result = await db.collection('counters').findOneAndUpdate(
    { _id: name },
    { $inc: { current: 1 } },
    { returnOriginal: false },
  );
  return result.value.current;
}

(async function () {
  try {
    await connectToDb();
    app.listen(3000, function () {
      console.log('App started on port 3000');
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
})();

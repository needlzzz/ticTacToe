//Aufgabe U3: Lösen Sie die untenstehenden TODO's

//TODO Konvertieren Sie das folgende Promise in Async/Await
fetch("https://swapi.co/api/starships/3")
  .then(response => response.json())
  .then(console.log)


//TODO Passen Sie den untenstehenden Code an um auch in der Zeile
//fetch(url).then(resp => resp.json())
//Async/Await zu benutzen. Es sollte also keine .then() calls mehr geben!
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
]

const getData = async function () {
  const [users, posts, albums] = await Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
  ));
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
}

//TODO Fügen Sie nun noch einen try/catch Block zu Ihrer Lösung hinzu um Fehler
//zu behandeln. Passen Sie dann eine der URL's an damit es zu einem Fehler kommt
//und prüfen Sie dass Ihr catch-Handler aufgerufen wird.
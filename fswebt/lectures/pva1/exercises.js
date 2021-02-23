// Template Strings
const teamName = "devops";
const people = [
  { name: "Rosi", role: "senior" },
  { name: "August", role: "junior" },
  { name: "Beni", role: "senior" },
  { name: "Ruedi", role: "junior" }
];

function personNamesCommaSeparated(people) {
  return people.map(person => person.name).join(", ");
}

function countSeniors(people) {
  const seniors = people.filter(elem => elem.role === "senior");
  return seniors.length;
}

const message = `There are ${people.length} people on the ${teamName} team.
Their names are ${personNamesCommaSeparated(people)}. 
${countSeniors(people)} of them have a senior role.`.replace("\n", " ");


// Higher-order functions
"PHP: hypertext Preprocessor"
  .split(/\W+/)
  .map(function(word) {
    return word.charAt(0).toUpperCase();
  })
  .join("");

const inventory = [
  { type: "machine", value: 5000 },
  { type: "machine", value: 650 },
  { type: "duck", value: 10 },
  { type: "furniture", value: 1200 },
  { type: "machine", value: 77 }
];

const totalMachineValue = inventory
  .filter(el => el.type === "machine")
  .reduce((acc, el) => acc + el.value, 0);

// Klassen
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}

// Prototypes -> Klassen
class Speaker {
  constructor(name, verb) {
    this.name = name;
    this.verb = verb;
  }
  speak(text) {
    console.log(this.name + " " + this.verb + " '" + text + "'");
  }
}
new Speaker("Mr. Meyer", "says").speak("hi");

class Shouter {
  constructor(name, verb = "shouts") {
    this.name = name;
    this.verb = verb;
  }
  speak(text) {
    console.log(this.name + " " + this.verb + " '" + text.toUpperCase() + "'");
  }
}
new Speaker("Mr. Meyer").speak("hi");

// Getters
class Speaker {
  constructor(name) {
    this.name = name;
  }

  get verb() {
    return "says";
  }

  speak(text) {
    console.log(this.name + " " + this.verb + " '" + text + "'");
  }
}

class Shouter extends Speaker {
  constructor(name) {
    super(name);
  }

  get verb() {
    return "shouts";
  }

  speak(text) {
    super.speak(text.toUpperCase());
  }
}

// Extends
class Car {
  constructor() {
    this.gas = 50;
    this.milage = 0;
  }
  hasGas() {
    return this.gas > 0;
  }
  drive() {
    if (this.hasGas()) {
      this.milage++;
      this.gas--;
    }
  }
}

class SubCar extends Car {
  fuel() {
    this.gas = 50;
  }

  drive(miles) {
    while (this.milage < miles) {
      super.drive();
    }
  }
}

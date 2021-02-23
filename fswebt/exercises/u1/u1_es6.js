//Aufgabe U1: ändern Sie unten alles zu neuem JavaScript (ES6)

//TODO Benutzen Sie anstatt var das neue let + const
var a = "test";
var b = true;
var c = 123;
a = "test2";


//TODO Benutzen Sie anstatt der herkömmlichen Zuweisung das neue
//Destructuring (Tipp: siehe 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)
var person = {
    firstName: "Hans",
    lastName: "Meier",
    age: 42,
    eyeColor: "grau"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;


//TODO Benutzen Sie sog. "Shorthand property names" anstatt der alten
//Property Initializer Syntax (Tipp: siehe 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Property_definitions)
var a = "test";
var b = true;
var c = 123;

var myObj = {
    a: a,
    b: b,
    c: c
};

//TODO Benuzten Sie default arguments für das Alter (18)
function isValidAge(age) {
    return age
}

//TODO Benutzen Sie anstatt herkömmlicher Funktionen die neuen Arrow Funktionen
function howOld(username, age) {
    if (username && age) {
        return username + " ist " + age + " Jahre alt";
    } else {
        return "Keine Ahnung wie alt du bist";
    }
}

//TODO Brauchen Sie anstatt der herkömmlichen String-Verkettung die
//neuen Template strings
var message = "Hallo " + firstName + "! Du bist " + age + " Jahre lat";

// Aufgabe 1: Finden Sie alle Raumschiffe deren max_atmosphering_speed > 1000 
// und für mehr als 5 Personen Platz bieten.

// Mit XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://swapi.co/api/starships/", true);
xhr.send(null);
xhr.onreadystatechange = function() {
  if (xhr.readyState !== 4) {
    // not ready
    return;
  }
  if (xhr.status === 200) {
    var json = JSON.parse(xhr.responseText);
    for (var i = 0; i < json.results.length; i++) {
      var starship = json.results[i];
      if (
        parseInt(starship.passengers) > 5 &&
        parseInt(starship.max_atmosphering_speed) > 1000
      ) {
        console.log(starship.name);
      }
    }
  } else {
    console.error("error: " + xhr.statusText);
  }
};


// Alternative mit fetch API
fetch('https://swapi.co/api/starships')
  .then(response => response.json())
  .then(json => {
    const starships = json.results.filter(starship =>
        parseInt(starship.passengers) > 5 &&
        parseInt(starship.max_atmosphering_speed) > 1000
    );
    starships.forEach(starship => {
      console.log(starship.name);
    });
  })
  .catch(error => {
    console.error(" error: " + error);
  });


// Alternative mit async/await
async function findStarships() {
  try {
    const response = await fetch("https://swapi.co/api/starships");
    const json = await response.json();
    const starships = json.results.filter(starship =>
      parseInt(starship.passengers) > 5 &&
      parseInt(starship.max_atmosphering_speed) > 1000
    );
    starships.forEach(starship => {
      console.log(starship.name);
    });
  } catch (error) {
    console.error(error);
  }
}


// Aufgabe 2
// 2. Wie heissen die Titel der Filme in welchen R2-D2 mitspielt?
function printMovieTitle(movieUrl) {
  var xhr = new XMLHttpRequest();
  xhr.open("get", movieUrl, true);
  xhr.send();
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status === 200) {
          var movieJson = JSON.parse(xhr.responseText);
          console.log(movieJson.title);
      }
  };
};

var xhr = new XMLHttpRequest();
xhr.open("get", "https://swapi.co/api/people/", true);
xhr.send();
xhr.onreadystatechange = function (){
  if(xhr.readyState == 4 && xhr.status === 200){
      var peopleJson = JSON.parse(xhr.responseText);
      for (var i = 0; i < peopleJson.results.length; i++){
          var person = peopleJson.results[i];
          if (person.name === "R2-D2"){
              var films = person.films;
              for (var j = 0; j < films.length; j++) {
                  var movieUrl = films[j];
                  printMovieTitle(movieUrl);
              }
          }
      }
  }
};
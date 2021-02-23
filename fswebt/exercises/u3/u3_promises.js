//Aufgabe U3: Lösen Sie die untenstehenden TODO's

//TODO Erzeugen Sie ein Promise das in drei sekunden "success" zurückgibt


//TODO Rufen Sie das erstellte Promise auf und geben Sie das Resultat mit console.log aus


//TODO Machen Sie die Implementierung des Promise kürzer indem Sie Promise.resolve() und
//console.log "success" benutzen


//TODO Fangen Sie den folgenden Fehler im Promise ab und geben Sie mit console.error "Oops" aus
Promise.reject("failed")

//TODO Benutzen Sie Promise.all um alle Leute von StarWars auf einmal per REST zu holen.
//Geben Sie diese mit console.log aus und setzen Sie auch einen Catch-Block ein
const urls = [
    "https://swapi.co/api/people/1",
    "https://swapi.co/api/people/2",
    "https://swapi.co/api/people/3",
    "https://swapi.co/api/people/4"
]

//TODO Passen Sie eine der vorherigen URL's an damit der Zugriff darauf fehlschlägt.
//Überprüfen Sie dass der catch Block den Fehler behandelt.

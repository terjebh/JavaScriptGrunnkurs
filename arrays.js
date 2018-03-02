
// Eksempler på bruk av Arrays.

// Lag en enkel liste over kursdager;
var minListe = ["Første kursdag","Andre kursdag","Tredje kursdag"];

minListe.unshift("Dagen før kursstart"); // Legg til et element på begynnelsen av listen
minListe.push("Første dag etter kurset"); // Legg til et element på slutten av listen

console.log("Det er nå "+minListe.length+" dager i listen:\n");

// Bla gjennom ilsten og skriv elementene til konsoll med forEach
minListe.forEach(function(element) {
  console.log(element);
});

console.log();  // lag et linjeskift

// Skriv listen ut som en kommaseparert liste med toString
console.log("Som kommaseparert tekst: "+minListe.toString());

console.log();  // lag et linjeskift

minListe.shift(); // Fjern første på listen
minListe.pop();   // Fjern siste på listen

console.log("Det er nå "+minListe.length+" dager i listen:\n");

// Bla gjennom ilsten og skriv elementene til konsoll med en for-løkke
for (var index = 0; index < minListe.length; index++) {
  console.log(minListe[index]);
}

console.log();  // lag et linjeskift

// Skriv listen ut som en liste adskilt med et gitt tegn ( her tabulator \t):
console.log("Som tabulatorseparert tekst: "+minListe.join("\t"));

// Slett og legg til fra inne i listen med splice()

minListe.splice(1,1) // Fjern Andre kursdag;

console.log("Andre kursdag er slettet: "+minListe.join(" - "));

minListe.splice(1,0,"Andre kursdag") // Legg til Andre kursdag igjen;

console.log("Andre kursdag er lagt til igjen: "+minListe.join(" - "));

minListe.

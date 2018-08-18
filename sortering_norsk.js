// Eskempler på sortering med ulike språk

let folk = ["Åge","Aage","Mikkel","Kari","Jens","Øivind","Ola"];

console.log("Usortert\n");

console.log(folk);

console.log("\nDefault sortering\n");

console.log(folk.sort());

console.log("\nNorsk sortering\n");

console.log(folk.sort((a, b) => a.localeCompare(b, "no")));


// med norsk som en egen funksjon
let norskSort = (a, b) => a.localeCompare(b, "no");

console.log("\nNorsk sortering - egen funksjon\n");

console.log(folk.sort(norskSort));

// med svensk som en egen funksjon
let svenskSort = (a, b) => a.localeCompare(b, "sv");

console.log("\nSvensk sortering - egen funksjon\n");

console.log(folk.sort(svenskSort));




let folk = ["Åge","Mikkel","Kari","Jens","Øivind","Ola"];

console.log("Usortert\n");

console.log(folk);

console.log("\nDefault sortering\n");

console.log(folk.sort());

console.log("\nNorsk sortering\n");

console.log(folk.sort((a, b) => a.localeCompare(b, "nb")));


// med norsk som en egen funksjon
let norskSort = (a, b) => a.localeCompare(b, "nb");

console.log("\nNorsk sortering - egen funksjon\n");

console.log(folk.sort(norskSort));


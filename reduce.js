esversion: 6;

let konto = [
{"nummer":1001,"transaksjon":600},
{"nummer":1002,"transaksjon":300},
{"nummer":1002,"transaksjon":700},
{"nummer":1001,"transaksjon":-200},
{"nummer":1001,"transaksjon":-600},
{"nummer":1001,"transaksjon":6000}
];

let saldo = konto.filter(x => x.nummer===1001).map(x => x.transaksjon).reduce((x,y) => x+y);

console.log("Saldo for konto 1001:",saldo);

let setning = "Det var en gang en stor krig i en fremmed verdensdel";

let ord = setning.split(" ");

// Tell opp antall unike ord i setningen
let unikeOrd = new Set();

ord.map(x=>unikeOrd.add(x));

console.log("Antall unike ord:",unikeOrd.size);


// Output:
// Saldo for konto 1001: 5800
// Antall unike ord: 9
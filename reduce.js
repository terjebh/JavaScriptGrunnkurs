esversion: 6;
// Eksempler på bruk av reduce()

// Eksempel 1: Beregne saldo for en konto

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

// Output:
// Saldo for konto 1001: 5800

// Eksempel 2: Funksjon for summering av ukjent antall parametre
const summer = (...args) => [...args].reduce((x,y) =>x+y);
const summen = summer(3,4,6,45);
console.log("Summen er:",summen); // 58


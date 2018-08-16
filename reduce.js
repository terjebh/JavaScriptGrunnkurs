esversion: 6;

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

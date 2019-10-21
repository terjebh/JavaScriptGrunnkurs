// Eksempler på prototype

// Eksempel 1

let snakk = function () {
    console.log(this.lyd);
}


let dyr = {
    snakk : snakk
};


let katt = {
    lyd : "mjau!"
}

// katt.snakk(); // snakk is not a function

Object.setPrototypeOf(katt, dyr);

katt.snakk(); // nå er katt.snakk() en funksjon


let hund = {
    lyd: "Voff!!!"
}

Object.setPrototypeOf(hund, dyr);

hund.snakk(); // voff!!


let ulv = {
 hyl: function() {
  console.log(this.lyd.toUpperCase());
 } 
};

Object.setPrototypeOf(ulv,hund);
ulv.hyl();
 


// Eksempel 2

// Funksjon med constructor
let Menneske = function (navn, alder, kjonn, egenskaper) {
    this.navn = navn;
    this.alder = alder
    this.kjon = kjonn;
    this.egenskaper = egenskaper;
}


let petter = new Menneske('Petter', 32, 'Mann', ['sterk', 'egenrådig', 'smart']);

console.log(petter.navn);
console.log(petter.egenskaper.join());

petter.epost = 'petter@smart.com';

console.log(petter.epost);

Menneske.nasjonalitet = "norsk"; // virker ikke

console.log(petter.nasjonalitet); // undefined

Menneske.prototype.nasjonalitet = "norsk"; // virker

console.log(petter.nasjonalitet); // norsk
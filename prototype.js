// Eksempler på prototype


// function med constructor
let Menneske = function (navn, alder, kjonn, egenskaper) {
    this.navn = navn;
    this.alder = alder
    this.kjon = kjonn;
    this.egenskaper = egenskaper;
}


let petter = new Menneske('Petter',32,'Mann',['sterk','egenrådig','smart']);

console.log(petter.navn);
console.log(petter.egenskaper.join());

petter.epost = 'petter@smart.com';

console.log(petter.epost);

Menneske.nasjonalitet = "norsk"; // virker ikke

console.log(petter.nasjonalitet); // undefined

Menneske.prototype.nasjonalitet = "norsk"; // virker

console.log(petter.nasjonalitet); // norsk


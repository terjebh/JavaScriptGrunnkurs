// Eksempler på higher order functions i JavaScript
// Et array med dyr

let dyr = [
  {navn:"Ola",art:"Katt",alder:6},
  {navn:"Petter",art:"Katt",alder:4},
  {navn:"Pan",art:"Hund",alder:8}
];


// Hent deler av objektene med map() og skriv ut som et array
console.log("Skrevet ut som array med map():");
console.log(dyr.map(x=>x.navn+" er en "+x.art));

// Hent deler av objektene med map() og dkriv ut med forEach
console.log("Skrevet ut som tekst med forEach():");
dyr.forEach(x=>console.log(x.navn+" er en "+x.art));


// Filtrer etter enkelte felts verdier med filter()
console.log(dyr.filter(x=>x.art=="Katt"));

// Hent alle katter med filter() og skriv ut som array

let katter = dyr.filter(x=>x.art=="Katt");

console.log("Liste over katter:");

katter.forEach(katt=>console.log("En katt: "+katt.navn));

// Hent alle katter som heter Ola, med filter()

console.log("Katter som heter Ola:");

let Ola = dyr.filter(x=>x.art=="Katt" && x.navn=="Ola");
console.log(Ola);

console.log("-------------------------");


let setning1 = dyr.map(function(x) {
return x.navn+" er en "+x.art;
});

console.log(setning1);

let setning2 = dyr.map((x)=> {
  return x.navn+" er en "+x.art
});
console.log(setning2);




let tall = [1,2,3,4,5,6];

console.log("Summen av "+tall+" er: ",tall.reduce((p, c) => { return p+c }, 0));
console.log("Produktet av "+tall+" er: ",tall.reduce((p, c) => { return p*c }, 1));



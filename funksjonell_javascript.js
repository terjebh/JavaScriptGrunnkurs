// Eksempler på higher order functions i JavaScript
let dyr = [
  {navn:"Ola",art:"Katt"},
  {navn:"Petter",art:"Katt"},
  {navn:"Pan",art:"Hund"}
];

// map og filter
console.log(dyr.map(x=>x.navn+" er en "+x.art));
console.log(dyr.filter(x=>x.art=="Katt"));
// console.log(dyr.reject(x=>x.art=="Katt"));

let setning1 = dyr.map(function(x) {
return x.navn+" er en "+x.art;
});

console.log(setning1);

let setning2 = dyr.map((x)=> {
  return x.navn+" er en "+x.art
});
console.log(setning2);

let katter = dyr.filter(x=>x.art=="Katt");
console.log(katter);

let Ola = dyr.filter(x=>x.art=="Katt" && x.navn=="Ola");
console.log(Ola);

let tall = [1,2,3,4];

console.log(tall.reduce((p, c) => { return p+c }, 0));
console.log(tall.reduce((p, c) => { return p*c }, 1));


console.log(Date());


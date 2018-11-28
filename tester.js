
let dyr = [
{navn:"Petter",art:"Katt",alder:2},
{navn:"Ola",art:"Hund",alder:4},
{navn:"Truls",art:"Katt",alder:3},
{navn:"Dagros",art:"Ku",alder:11}
];

console.log(dyr.map(x => x.navn+" er en "+x.art+" som er "+x.alder+" år gammel").join("\n"));

console.log("\nSamlet alder for alle dyr: ",dyr.map(x=>x.alder).reduce((x,y) => x+y));



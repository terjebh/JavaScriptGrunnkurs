//Eksempler på strengefunksjoner

// Regex-erstatning med replace()
var re = /epler/gi;
var str = "Epler er runde og epler er saftige.";
var nystr = str.replace(re, "appelsiner");
console.log(nystr);

// lag lenke med link()
let str2 = new String("Kursportal");
let URL = "http://www.itfakultetet.no/kurs";
console.log(str2.link( URL ));

// eller lag en lenke direkte:
console.log("Kursportal".link("http://www.itfakultetet.no/kurs"));

// split() og join()

let tegn = "Dette er en setning med bokstaver og mellomrom".split('');
console.log(tegn);

let setningFraTegn = tegn.join('')
console.log(setningFraTegn);

let setningMedSkilletegn = "Dette er en setning".split('').join('-');
console.log(setningMedSkilletegn);


// Skriv en setning baklengs:
let baklengs = "Dette er en setning".split("").reverse().join("");
console.log(baklengs,'\n');

// Finn en bokstavs indeksverdi i en setning
let str3 = "Dette er en setning som har bokstaven å i seg";
console.log(str3,'\n');
let indeksverdi = str3.search("å");
console.log("\"å\" er bokstav nummer:",indeksverdi);


// startsWith(), endsWith() og includes() 

let str4 = "Dette er starten og dette er slutten på teksten";

console.log(str4.startsWith("Dette")); // true
console.log(str4.endsWith("slutten"));  // false
console.log(str4.includes("på"));       // true


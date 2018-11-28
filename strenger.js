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

// Skriv en setning baklengs:
let baklengs = "Dette er en setning".split("").reverse().join("");
console.log(baklengs,'\n');

// Finn en bokstavs indeksverdi i en setning
let str3 = "Dette er en setning som har bokstaven å i seg";

console.log(str3,'\n');

let indeksverdi = str3.search("å");


console.log("\"å\" er bokstav nummer:",indeksverdi);




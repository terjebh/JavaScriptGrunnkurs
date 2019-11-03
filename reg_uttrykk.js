// Eksempler på bruk av regulære uttrykk

const pattern = /orange/;  
console.log(pattern.test("orange")); // true
const patternIgnoreCase = /orange/i;
console.log(patternIgnoreCase.test("Orange")); // true
const patternGlobal = /orange/ig;
console.log(patternGlobal.test("Orange Juice is orange juice")); // true


// Sjekk om et tall eller en streng inneholder ett av tallene i en tallrekke
const pattern1 = /[0-5]/;
console.log(pattern1.test(3)); //true
console.log(pattern1.test(12345)); //true
console.log(pattern1.test(9)); //false
console.log(pattern1.test(6789)); //false
console.log(/[0123456789]/.test("This is year 2018")); //true


// Sjekk om en streng ikke inneholder ett av flere tegn
const pattern2 = /[^abc]/;
console.log(pattern2.test('a')); //false
console.log(pattern2.test('d')); //true

// Sjekk om en streng begynner med ett ord
const pattern3 = /^Dette/;
console.log(pattern3.test('Dette stemmer')); //false
console.log(pattern3.test('Men ikke dette')); //true


// Sjekk om enn streng inneholder mer enn en forekomst av et ord
const pattern4 = /eple/;




//Eksempler på tallfunksjoner

// Avrunding
let num = new Number(7.987654);
console.log(num.toPrecision(3)); // 7.99

console.log(num.toPrecision(2)); // 8.0

console.log(num.toFixed(1)); // 8.0    
console.log(num.toPrecision(1)); // 8    

console.log(Math.round(num)); // 8 

console.log(Math.abs(num)); // 7.987654
console.log(Math.ceil(num)); // 8 
console.log(Math.floor(num)); // 7 
console.log(Math.sign(num)); // 1 = positivt tall 
console.log(Math.trunc(num)); // 8 


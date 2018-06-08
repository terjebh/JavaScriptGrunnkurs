const fetch = require('node-fetch');

fetch('https://itfakultetet.no/dogs.json')
.then(data => data.json())
.then(json => {
console.log("Struktur:");

  console.log(json.dogs);
  
console.log("\nBla gjennom med forEach:");

json.dogs.forEach(hund => {
  console.log("Navn:",hund.navn,"- Alder:",hund.alder);
  
});

}) 
.catch(error => {
        // Process all errors here
    });
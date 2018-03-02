const fetch = require('node-fetch');

fetch('https://itfakultetet.no/index.php')
.then(data => {
        // Do some work with the returned data
        console.log(data.body);
        
    })
.catch(error => {
        // Process all errors here
    });


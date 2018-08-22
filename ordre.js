let fs = require('fs');

let output = fs.readFileSync('ordre.txt','utf8')
.trim()
.split('\n')
.map(linje => linje.split('\t'))
.reduce((kunder,linje) => {
    kunder[linje[0]] = kunder[linje[0]] || []
    kunder[linje[0]].push({
    navn: linje[1],
    antall: linje[2],
    pris:linje[3]
    })
return kunder
}, {});

console.log(JSON.stringify(output,null,2));

fs.writeFileSync('ordre.json',JSON.stringify(output,null,2));

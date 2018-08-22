// Eksempler på bruk av bind

let dog = {
 sound: "voff",
 talk: function() {
     console.log(this.sound);
 }

}

dog.talk();  // voff

let talkFunction = dog.talk;

talkFunction(); // undefined, fordi:

// det er det amme som dette :
// talkFunction = function() {
//     console.log(this.sound);   // this peker ikke til dog.sound lenger    
// }

let boundFunction = talkFunction.bind(dog);

boundFunction(); // voff, fordi talkFunction er nå bundet til dog


// eller bruk bind direkte: 

talkFunction2 = dog.talk.bind(dog); // bind talk direkte til dog

talkFunction2(); // voff








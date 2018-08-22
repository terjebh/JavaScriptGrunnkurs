// Eksempler på currying

// En enkel funksjon med tre parametre
const make3 = (a, b, c) => String(100 * a + 10 * b + c);

// Samme funksjon "curried" til tre funksjoner med ett parameter hver:
    const make3curried = a => b => c => String(100 * a + 10 * b + c);

// Alternativt kan vi nøste funksjonene slik:

    const make3curried2 = function (a) {
        return function (b) {
            return function (c) {
                return String(100 * a + 10 * b + c);
            };
        };
    };


console.log(make3(1,20,4)); // output: 304
console.log(make3curried(1)(20)(4)); // output: 304



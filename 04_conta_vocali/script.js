/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

/*function getVowels(names) {
    let result = [];
    const vowels = [`a`, `e`, `i`, `o`, `u`];

    for (let i = 0; i < names.length; i++) {
        const char = names[i];


        if (vowels.includes(char)) {
            result.push(char)

        }

    }
    return result
}
    */

// Arrow Function

const getVowels = (names) => {
    let result = [];
    const vowels = [`a`, `e`, `i`, `o`, `u`];

    for (let i = 0; i < names.length; i++) {
        const char = names[i];


        if (vowels.includes(char)) {
            result.push(char)

        }

    }
    return result

}


// Invoca la funzione qui e stampa il risultato in console
const onlyVowels = getVowels(word)
console.log(onlyVowels);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)



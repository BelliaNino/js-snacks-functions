/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function getVowels(names) {
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


const word2 = `antonino, bellia`

function ottieniLettere(parola){
    let arr = []
    const lettere = [`b`, `t`, `n`, `l`,]

    for (let i = 0; i < parola.length; i++){
        const char = parola[i];

        if (lettere.includes(char)){
            arr.push(char)
        }
    }
    return arr
}

const prova = ottieniLettere(word2)
console.log(prova);

/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

/*function getInitial(arr){
let result = [];

for (let i = 0; i < arr.length; i++){
    const char = arr[i];
    result.push(char.charAt(0))
}

return result
}*/

// Arrow function
let result = [];

for (let i = 0; i < arr.length; i++){
    const char = arr[i];
    result.push(char.charAt(0))
}

return result


// Invoca la funzione qui e stampa il risultato in console
const initial = getInitial(names)
console.log(initial);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
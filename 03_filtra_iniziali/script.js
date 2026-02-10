/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/*function getSameInitialWord (arr, letter){
const result = []

for (let i = 0; i < arr.length; i++){ //scompongo array
    const char = arr[i]

    if (char.charAt(0).toLowerCase() === letter.toLowerCase()){//se la prima vocale è uguale alla lettera inserita
        result.push(char)//allora viene pushata nell'array
    }    
}
return result 
}*/

//Arrow function
const getSameInitialWord = (arr, letter) => {
    const result = []

for (let i = 0; i < arr.length; i++){ //scompongo array
    const char = arr[i]

    if (char.charAt(0).toLowerCase() === letter.toLowerCase()){//se la prima vocale è uguale alla lettera inserita
        result.push(char)//allora viene pushata nell'array
    }    
}
return result 
}


// Invoca la funzione qui e stampa il risultato in console

const sameStart = getSameInitialWord(names, `a`) //cerco i nomi con l'iniziale `A`
console.log(sameStart);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
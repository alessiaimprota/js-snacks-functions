/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const sameLetterNames=[]
let letter=prompt("Inserisci una lettera").toUpperCase();

/*
for(let i=0; i<names.length; i++){
if (names[i].charAt(0)===letter){
    sameLetterNames.push(names[i]);
}
}
console.log(sameLetterNames)*/

// Dichiara la funzione qui.
function nameFilterByFirstChar(oldArray, newArray, sameFirstCharItem){
for(let i=0; i<oldArray.length; i++){
if (oldArray[i].charAt(0)===sameFirstCharItem){
    newArray.push(oldArray[i]);
}
}
console.log(newArray)
}

// Invoca la funzione qui e stampa il risultato in console
console.log(nameFilterByFirstChar(names, sameLetterNames, letter))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
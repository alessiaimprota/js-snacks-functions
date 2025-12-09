/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const firstLetterNames = [];

/*seguendo i consigli datomi l'ho risolta prima normalmente 
for(let i=0; i<names.length; i++){
    firstLetterNames.push(names[i].charAt(0))}
    console.log(firstLetterNames)*/

// Dichiara la funzione qui.
/*function firstCharItemArray (originalArray, newArray){
    for(let i=0; i<originalArray.length; i++){
    newArray.push(originalArray[i].charAt(0))}
    console.log(newArray)
}*/

const firstCharItemArray = (originalArray, newArray) => {
  for (let i = 0; i < originalArray.length; i++) {
    newArray.push(originalArray[i].charAt(0));
  }
};

// Invoca la funzione qui e stampa il risultato in console

firstCharItemArray(names, firstLetterNames);

console.log(firstLetterNames);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

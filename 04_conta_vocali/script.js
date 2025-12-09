/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const wordVowel=[]
const vowel =["a", "e", "i", "o", "u"]

for (let i= 0; i<word.length; i++){
if(word.charAt(1)===vowel[i]){
    wordVowel.push(word.charAt(1));
}
}
console.log(wordVowel)
// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)
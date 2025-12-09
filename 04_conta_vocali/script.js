/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vowelsInWord=[]
const vowels =["a", "e", "i", "o", "u"]

//il ciclo deve percorrere la parola per la sua interezza per controllare ogni singola lettera. Se la lettera è presente nell'Array vowel dovrà essere pushata in vowelsInWord
/*for (let i= 0; i<word.length; i++){
if(vowels.includes(word[i])){
    vowelsInWord.push(word[i]);
}
}
console.log(vowelsInWord.length)*/

// Dichiara la funzione qui.

function checkVowels (wordToCheck, commonVowels, vowels){
    for (let i= 0; i<wordToCheck.length; i++){
        if(vowels.includes(wordToCheck[i])){
            commonVowels.push(wordToCheck[i]);
        }
    }
    return commonVowels.length;
}


// Invoca la funzione qui e stampa il risultato in console
const vowelsWordLength = checkVowels (word, vowelsInWord, vowels)
console.log(`"${word}": ${vowelsWordLength} (${vowelsInWord})`)
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
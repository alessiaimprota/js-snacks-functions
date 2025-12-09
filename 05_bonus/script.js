/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito.
 */

const user = "Mario";

//mi recupero dall'utente l'ora
const now = new Date();
const hours = now.getHours();

// sposto di qua il ragionamento
/*
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)*/

// Dichiara la funzione qui.
function greetUser(userName, time) {
  let greetingMessage;
  if (time <= 13) {
    greetingMessage = `Buongiorno ${userName}`;
  } else if (time > 13 && time < 17) {
    greetingMessage = `Buon pomeriggio ${userName}`;
  } else {
    greetingMessage = `Buonasera ${userName}`;
  }
  return greetingMessage;
}

// Invoca la funzione qui e stampa il risultato in console
let helloUser = greetUser(user, hours);
console.log(helloUser);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";


// Dichiara la funzione qui.

const helloUser= (name) => `Ciao ${name}`; 
/*function helloUser(name){
 let mess;
 return mess= `Ciao `+name;
}*/


// Invoca la funzione qui e stampa il risultato in console


//Risultato atteso se si passa 'Mario': // ciao Mario
console.log(helloUser(userName))

/*
Numero pari o dispari
Scrivi un programma che verifichi se un numero inserito è pari o dispari.
*/

const numero = parseInt(prompt("inserisci un numero e vediamo se è pari o dispari: "));
if(numero % 2 === 0){
    console.log("il numero è pari!");
}
else{
    console.log("il numero è dispari");
}

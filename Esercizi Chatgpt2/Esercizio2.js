//Chiedi una parola e stampa la versione invertita (es. “ciao” → “oaic”).

let parola = prompt("inserisci una parola che invertiamo: ");
const reverse = parola.split("").reverse().join("");
console.log(reverse);



//split: divide una stringa in un'array

//reverse: inverte l'ordine dell'array

//join: unisce l'array in un'unica stringa
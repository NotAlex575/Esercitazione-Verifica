/*
Somma dei numeri in un array
Data la lista [1, 5, 10, -2, 8], calcola la somma di tutti i numeri.
*/

const lista = [1, 5, 10, -2, 8]
let somma = 0;
for(i = 0; i < lista.length; i++){
    somma += lista[i];
}
console.log(somma)
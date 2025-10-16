/*
Trova il più grande in un array
Scrivi una funzione che restituisca il numero più grande in un array.
*/

const lista = [1, 5, 10, 2, 8];
let valueMaggiore = 0;
for(i = 0; i < lista.length; i++){
    if(valueMaggiore < lista[i]){
        valueMaggiore = lista[i];
    }
}
console.log(valueMaggiore)
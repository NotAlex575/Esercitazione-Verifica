/*
Massimo tra due numeri
Chiedi due numeri e mostra quale è il maggiore.
*/

const value1 = parseInt(prompt("inserisci il 1 valore: "));
const value2 = parseInt(prompt("inserisci il 2 valore: "));

if(value1 > value2){
    console.log(value1+" è maggiore di "+value2)
}
else if(value1 < value2){
    console.log(value1+ " è minore di "+ value2)
}
else{
    console.log("i valori inseriti sono uguali!")
}
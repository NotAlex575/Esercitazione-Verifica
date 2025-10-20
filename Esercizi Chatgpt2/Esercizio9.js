//Data una lista di numeri e un numero di soglia, conta quanti elementi sono maggiori della soglia

const valori = [11, 24, 35, 4, 5, 1, 89, 55555];
const soglia = parseInt(prompt("inserisci una soglia: "));
let counter = 0;

for(i = 0; i < valori.length; i++){
  if(valori[i] > soglia){
    counter++;
  }
}

console.log(counter)
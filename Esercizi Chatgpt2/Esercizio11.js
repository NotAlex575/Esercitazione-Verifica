//Data una lista di parole e un numero n, mostra solo quelle più lunghe di n caratteri.

const valori = ["paolina", "paolettina", "cinque", "ciao", "si", "poligolettosauro"];
const n = parseInt(prompt("inserisci numero: "));

for(i = 0; i < valori.length; i++){
  if(valori[i].length > n){
    console.log(valori[i])
  }
}


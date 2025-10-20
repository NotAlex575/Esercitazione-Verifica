//Chiedi un numero e mostra se è positivo, negativo o zero.

const numero = parseInt(prompt("inserisci un numero: "))

if(numero < 0){
  console.log("il valore è negativo")
}
else if(numero > 0){
  console.log("il valore è positivo")
}
else{
  console.log("il valore è 0")
}
const value = prompt("Inserisci 1 parola, e vediamo se è palindroma o meno: ")
const reverseValue = value.split("").reverse().join("");

if(value === reverseValue){
  console.log("la parola è palindroma")
}
else{
  console.log("la parola non è palindroma")
}
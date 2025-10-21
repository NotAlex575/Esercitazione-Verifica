//anagramma

let anagramma = prompt("inserisci la prima parola: ").toLowerCase();
let anagramma2 = prompt("inserisci la seconda parola: vediamo se sono anagramme ").toLowerCase();

anagramma = anagramma.split("").sort().join("");
anagramma2 = anagramma2.split("").sort().join("");

if(anagramma === anagramma2){
  console.log("la parola è anagramma")
}
else{
  console.log("la parola non è anagramma")
}
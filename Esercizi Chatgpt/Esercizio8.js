const value = prompt("Inserisci 1 parola, e vediamo se è palindroma o meno: ")
let lengthTot = value.length - 1 
let palindroma = 1;
for (i = 0; i < value.length; i++){
    if(value[i] != value[lengthTot]){
        palindroma = 0
        break;
    }
    lengthTot--;
}

if(palindroma === 1){
    console.log("la parola è palindroma")
}
else{
    console.log("la parola non è palindroma")
}
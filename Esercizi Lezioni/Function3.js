//Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera

const Stringhe = ["Alessandro", "Mauro", "Ilija" ,"Omar", "Alfonso"];
const lettera = "A"

const PrimaLettera = (Stringhe, lettera) => {
    let primaLettera = [];
    for(i = 0; i < Stringhe.length; i++){
        if(Stringhe[i][0] === lettera){
            primaLettera.push(Stringhe[i]);
        }
    }
    return primaLettera;
}

console.log(PrimaLettera(Stringhe, lettera));



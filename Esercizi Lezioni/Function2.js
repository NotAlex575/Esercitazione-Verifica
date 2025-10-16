//Scrivi una funzione che accetti un array di nomi 
//e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito

const Nomi = ["Alessandro", "Mauro", "Ilija" ,"Omar"];

const PrimaLettera = (Nomi) => {
    let primaLettera = [];
    for(i = 0; i < Nomi.length; i++){
        primaLettera.push(Nomi[i][0]);
    }
    return primaLettera;
}

console.log(PrimaLettera(Nomi));



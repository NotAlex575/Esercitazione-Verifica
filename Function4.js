//Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno

const stringa = "pincopallino"

const Vocali = (stringa) =>{
    const vocali = ["a", "e", "i", "o", "u"]; 
    let totVocali = 0;
    for(i = 0; i < stringa.length; i++){
        if(vocali.includes(stringa[i])){
            totVocali++; 
        }
    }
    return totVocali;
}

console.log(Vocali(stringa))
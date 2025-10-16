/*
Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nome = "Paolino";
const orario = 15;

function ciao(nome, orario){
    if(orario <= 13){
        return `Buongiorno ${nome}`;
    }
    else if (orario <= 17){
        return `Buonpomeriggio ${nome}`;
    }
    else if(orario > 17){
        return `Buonasera ${nome}`;
    }
}

console.log(ciao(nome, orario));
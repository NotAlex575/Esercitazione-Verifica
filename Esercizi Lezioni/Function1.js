/*Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]")*/

const nome = "Paolino";

function ciao(nome){
    return `Ciao ${nome}`;
}

console.log(ciao(nome));
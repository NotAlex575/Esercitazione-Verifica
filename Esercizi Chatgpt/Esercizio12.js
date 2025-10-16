/*
Crea una funzione che restituisca solo gli utenti con età maggiore di 21.
*/

const utenti = [
    {nome: "Paolino", età: 21},
    {nome: "Paolina", età: 23},
    {nome: "Paoletta", età: 26},
    {nome: "Paouccio", età: 6},
    {nome: "Paolone", età: 36}
]

const utenti25piu = []

utenti.forEach(utente => {
    if(utente.età > 21){
        utenti25piu.push(utente)
    }
})

console.log(utenti25piu)
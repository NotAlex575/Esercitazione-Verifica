//Crea una funzione che simuli il lancio di due dadi (numeri casuali da 1 a 6) e mostri la somma.

const dado1 = Math.floor(Math.random()*6)+1
const dado2 = Math.floor(Math.random()*6)+1
console.log(dado1) 
console.log(dado2)
console.log(dado1+dado2)


/* 2 metodo:
const dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1) 
const dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1) 
console.log(dado1) 
console.log(dado2)
console.log(dado1+dado2)
*/
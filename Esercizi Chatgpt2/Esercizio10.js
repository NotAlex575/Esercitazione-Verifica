//Data la lista [1, 2, 3, 2, 4, 1, 5], restituisci un array senza duplicati

const lista = [1, 2, 3, 2, 4, 1, 5];
let lista2 = [];

for(i = 0; i < lista.length; i++){
  let duplicato = false;
  for(j = 0; j < lista2.length; j++){
    if(lista[i] === lista2[j]){
      duplicato = true;
    }
  }
  if(!duplicato){
    lista2.push(lista[i])
  }
}

console.log(lista2)


/*
const numeri = [1, 2, 3, 2, 4, 3, 5];

function rimuoviDuplicati(lista) {
  return [...new Set(lista)];
}

console.log(rimuoviDuplicati(numeri));
*/
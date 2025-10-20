//Data la lista [4, 10, 6, 8, 2], calcola la media aritmetica.

let somma = 0;
const lista = [4, 10, 6, 8, 2];
for(i = 0; i < lista.length; i++){
  somma += lista[i]
}
const media = somma / lista.length;
console.log(media)
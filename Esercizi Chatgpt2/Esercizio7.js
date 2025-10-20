//Scrivi una funzione che prenda un array e ne restituisca uno invertito (senza usare .reverse())

const parole = ["c", "i", "c", "c", "i", "o"]

function inverti(parole) {
  let reverse = [];
  let i = parole.length;
  do{
    reverse.push(parole.pop());
    i--;
  }while(i !== 0)
  return reverse;
}

console.log(inverti(parole))


/* altro modo
const mioArray = [1, 2, 3, 4, 5];

function invertiArray(arr) {
  const arrayInvertito = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrayInvertito.push(arr[i]);
  }
  return arrayInvertito;
}

console.log(invertiArray(mioArray));
*/
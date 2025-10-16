/*
Estrazione casuale (tipo lotteria)
Estrai 5 numeri casuali da 1 a 90 senza ripetizioni e mostrali in console. 
*/

const generaNumeriCasuali = () => {
  const numeriCasuali = [];
  while (numeriCasuali.length < 5) {
    const num = Math.floor(Math.random() * 90) + 1;
    if (!numeriCasuali.includes(num)) {
      numeriCasuali.push(num);
    }
  }
  return numeriCasuali;
}
console.log("Numeri casuali generati:", generaNumeriCasuali());
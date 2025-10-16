/*
FizzBuzz
Stampa i numeri da 1 a 100:

per multipli di 3 stampa “Fizz”

per multipli di 5 stampa “Buzz”

per multipli di entrambi stampa “FizzBuzz”.
*/


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

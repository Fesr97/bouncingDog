/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

funzione per checkare il resto del numero
funzione per verificare numeri diversi*/

function isItDivisible(value) {
  for (let num = 20; num < Infinity; num++) {
    let isDivisible = true;
    for (let i = 1; i < 20; i++) {
      if (num % i != 0) {
        isDivisible = false;
        break;
      }
    }
    if (isDivisible) {
      console.log(num);
      break;
    }
  }
}

isItDivisible(1);

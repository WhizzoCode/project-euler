'use strict';

/**
 * # Problem 7: 10001st prime
 * 
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
 * that the 6th prime is 13.
 * 
 * What is the 10001st prime number?
 */

function nthPrime(n) {
  let nth = 0;
  let current = 1;

  if (n < 1) {
    return;
  }

  while (nth < n) {
    current++;
    let max = Math.floor(Math.sqrt(current));
    let isPrime = true;
    for (let i = 2; i <= max; i++) {
      if (current % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      nth++;
    }
  }

  return current
}

console.log(nthPrime(5));

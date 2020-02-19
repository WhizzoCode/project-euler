'use strict';

/**
 * # Problem 10: Summation of primes
 * 
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * 
 * Find the sum of all the primes below two million.
 */

function summationOfPrimes(n) {
  let sum = 0;
  for (let i = 2; i < n; i++) {
    let isPrime = true;
    let max = Math.floor(Math.sqrt(i));
    for (let j = 2; j <= max; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sum += i;
    }
  }
  return sum;
}

console.log(summationOfPrimes(2000000));

'use strict';

/**
 * # Problem 3: Largest prime factor
 * 
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 * What is the largest prime factor of the number 600851475143 ?
 */

function largestPrimeFactor(number) {
  let maxPrime = 1;
  for (let i = 2; i <= number; i++) {
    while (number % i == 0) {
      maxPrime = i;
      number /= i;
    }
  }
  return maxPrime;
}

console.log(largestPrimeFactor(600851475143));

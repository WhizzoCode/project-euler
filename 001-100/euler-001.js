'use strict';

/**
 * # Problem 1: Multiples of 3 and 5
 * 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we
 * get 3, 5, 6 and 9. The sum of these multiples is 23.
 * 
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

function multiplesOf3and5(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    sum += i % 3 && i % 5 ? 0 : i;
  }
  return sum;
}

console.log(multiplesOf3and5(1000));

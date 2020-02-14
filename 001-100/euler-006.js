'use strict';

/**
 * # Problem 6: Sum square difference
 * 
 * The sum of the squares of the first ten natural numbers is,
 * 
 * 1² + 2² + ... + 10² = 385
 * 
 * The square of the sum of the first ten natural numbers is,
 * 
 * (1 + 2 + ... + 10)² = 55² = 3025
 * 
 * Hence the difference between the sum of the squares of the first ten natural
 * numbers and the square of the sum is 3025 − 385 = 2640.
 * 
 * Find the difference between the sum of the squares of the first one hundred
 * natural numbers and the square of the sum.
 */

function sumSquareDifference(n) {
  let sumOfSquares = 0;
  let squareOfSum = 0;

  for (let i = 1; i <= n; i++) {
    sumOfSquares += i ** 2;
    squareOfSum += i;
  }
  squareOfSum **= 2;

  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(100));

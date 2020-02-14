'use strict';

/**
 * # Problem 5: Smallest multiple
 * 
 * 2520 is the smallest number that can be divided by each of the numbers from 1
 * to 10 without any remainder.
 * 
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 */

function smallestMultiple(n) {
  let primesObj = {};
  let primesArr;
  let result = 1;

  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primesObj[i] = 0;
    }
  }
  primesArr = Object.keys(primesObj);

  for (let i = 2; i <= n; i++) {
    let currentNum = i;
    for (let j = 0; j < primesArr.length; j++) {
      let currentPrime = primesArr[j];
      let amount = 0;
      while (currentNum % currentPrime == 0) {
        amount++;
        currentNum /= currentPrime;
      }
      if (amount > primesObj[currentPrime]) {
        primesObj[currentPrime] = amount;
      }
    }
  }

  for (let j = 0; j < primesArr.length; j++) {
    result *= Math.pow(primesArr[j], primesObj[primesArr[j]]);
  }

  return result;
}

console.log(smallestMultiple(20));

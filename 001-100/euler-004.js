'use strict';

/**
 * # Problem 4: Largest palindrome product
 * 
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 * 
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

function largestPalindromeProduct(digits) {
  let maxPalindrome = null;
  let min = Math.pow(10, digits - 1);
  let max = Math.pow(10, digits) - 1;
  for (let mult1 = max; mult1 >= min; mult1--) {
    if (mult1 * mult1 < maxPalindrome) {
      break;
    }
    for (let mult2 = mult1; mult2 >= min; mult2--) {
      let product = mult1 * mult2;
      if (product < maxPalindrome) {
        break;
      }
      if (product == product.toString().split('').reverse().join('')) {
        maxPalindrome = product;
        break;
      }
    }
  }
  return maxPalindrome;
}

console.log(largestPalindromeProduct(3));

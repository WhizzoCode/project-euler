'use strict';

/**
 * # Problem 9: Special Pythagorean triplet
 * 
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for
 * which,
 * 
 * a² + b² = c²
 * 
 * For example, 3² + 4² = 9 + 16 = 25 = 5².
 * 
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

function specialPythagoreanTriplet(n) {
  for (let a = 1; a <= Math.floor(n / 3) - 1; a++) {
    for (let b = a + 1; b <= Math.floor((n - a) / 2); b++) {
      let c = n - a - b;
      if (a ** 2 + b ** 2 == c ** 2) {
        return a * b * c;
      }
    }
  }
}

console.log(specialPythagoreanTriplet(1000));

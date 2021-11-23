const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//TEST CASE
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([6, 5, 3, 4, 2, 1]), middle([1, 2, 3, 4, 5, 6])); //true
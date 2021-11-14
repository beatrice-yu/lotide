const eqArrays = function(x, y) {
  return (JSON.stringify(x) === JSON.stringify(y)) ? true : false;
};

const assertArraysEqual = function(actual, expected) {
  console.log(
    (eqArrays(actual, expected)) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  );
};
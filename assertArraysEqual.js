const eqArrays = function(x, y) {
  return Array.isArray(x) && Array.isArray(y) && x.length === y.length && x.every((value, i) => value === y[i]);
};

const assertArraysEqual = function(actual, expected) {
  console.log(
    (eqArrays(actual, expected)) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  );
};
const eqArrays = function(x, y) {
  return Array.isArray(x) && Array.isArray(y) && x.length === y.length && x.every((value, i) => value === y[i]);
};

const assertArraysEqual = function(actual, expected) {
  console.log(
    (eqArrays(actual, expected)) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  );
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//TEST CODE
console.log(assertArraysEqual(map(words, word => word[0]), words.map(x => x[0])));
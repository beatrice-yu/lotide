const eqArrays = function(x, y) {
  return Array.isArray(x) && Array.isArray(y) && x.length === y.length && x.every((value, i) => value === y[i]);
};

const assertArraysEqual = function(actual, expected) {
  console.log(
    (eqArrays(actual, expected)) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  );
};

const takeUntil = function(array, callback) {
  const y = [];

  for (let x of array) {
    if (callback(x))
      break;
    else
      y.push(x);
  }

  return y;
}


// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// ASSERTIONS
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
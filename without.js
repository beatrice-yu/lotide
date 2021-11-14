const eqArrays = function(x, y) {
  return (JSON.stringify(x) === JSON.stringify(y)) ? true : false;
};

const assertArraysEqual = function(actual, expected) {
  console.log(
    (eqArrays(actual, expected)) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  );
};

const without = function(source, itemsToRemove) {
  for (let x = 0; x < itemsToRemove.length; x++)
    source = source.filter(element => element !== itemsToRemove[x]);

  return source;
};

// TEST CASE
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
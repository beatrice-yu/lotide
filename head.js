const assertEqual = function(actual, expected) {
  console.log(
    (actual === expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  );
};

const head = function(arrayContent) {
  return arrayContent[0];
};

assertEqual(head([5,6,7]), 7);
assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), "5");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
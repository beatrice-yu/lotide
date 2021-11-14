// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(
    (actual === expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  );
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lotide","Lotide");
assertEqual(1, 2);
assertEqual(1, 1);
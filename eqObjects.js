const assertEqual = function(actual, expected) {
  console.log(
    (actual === expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  );
};

const eqArrays = function(x, y) {
  return (JSON.stringify(x) === JSON.stringify(y)) ? true : false;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);

  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (const x of arr1) {
      if (Array.isArray(object1[x]) && Array.isArray(object2[x])) {
        if (!eqArrays(object1[x], object2[x])) {
          return false;
        }
      } else if (object1[x] !== object2[x]) {
        return false;
      }
    }
  }

  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };

const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

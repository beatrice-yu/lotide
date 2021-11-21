const eqArrays = function(x, y) {
  return Array.isArray(x) && Array.isArray(y) && x.length === y.length && x.every((value, i) => value === y[i]);
};

module.exports = eqArrays;
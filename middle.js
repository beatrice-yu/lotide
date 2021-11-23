const middle = function(x) {
  return (x.length > 2) ? (x.length % 2 === 0) ? [x[Math.floor(x.length / 2) - 1], x[Math.floor(x.length / 2)]] : [x[Math.floor(x.length / 2)]] : [];
};

module.exports = middle;
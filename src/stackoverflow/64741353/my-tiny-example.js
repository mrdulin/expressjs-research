const inner = function inner() {
  return Math.random();
};

const outer = function outer() {
  if (inner() > 0.5) return true;
  return false;
};

module.exports = {
  outer,
};

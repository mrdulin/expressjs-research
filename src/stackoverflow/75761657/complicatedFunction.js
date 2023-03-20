const { compose } = require('./compose');

const complicatedFunction = (argA, argB) => {
  const result = 1;
  const value = 2;
  const composition = compose(result, value);
  return composition;
};

module.exports = complicatedFunction;

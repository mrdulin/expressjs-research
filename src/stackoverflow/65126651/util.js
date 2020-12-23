const { func2 } = require('./a');

const func1 = () => {
  return 'hello ' + func2();
};

module.exports = { func1 };

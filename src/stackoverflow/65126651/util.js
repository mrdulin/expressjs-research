const a = require('./a');

const func1 = () => {
  return 'hello ' + a.func2();
};

module.exports = { func1 };

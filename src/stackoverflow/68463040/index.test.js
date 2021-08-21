const obj = require('./');
const sinon = require('sinon');

describe('68463040', () => {
  it('should pass', () => {
    function fakeFoo(arg) {
      if (arg == 1) {
        return 6;
      }
      if (arg == 2) {
        return 7;
      }
    }
    sinon.replace(obj, 'foo', fakeFoo);
    const actual = obj.methodToTest();
    sinon.assert.match(actual, 13);
  });
});

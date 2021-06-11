const mymodule = require('./mymodule');
var sinon = require('sinon');

describe('Test suite', function () {
  let calledFuncSpy;
  let consoleSpy;

  beforeEach(function () {
    calledFuncSpy = sinon.spy(mymodule, 'calledFunc');
    consoleSpy = sinon.spy(console, 'log');
  });
  afterEach(function () {
    calledFuncSpy.restore();
    consoleSpy.restore();
  });

  it('Test the add method', function () {
    mymodule.ownHelloWorld();
    sinon.assert.calledOnce(calledFuncSpy);
  });
});

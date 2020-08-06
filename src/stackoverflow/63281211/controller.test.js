const controller = require('./controller');
const A = require('./a');
const sinon = require('sinon');

describe('63281211', () => {
  it('should pass', () => {
    const a = sinon.createStubInstance(A);
    a.getResult.returns('faked result');
    const logSpy = sinon.spy(console, 'log');
    controller.doProcess(a);
    sinon.assert.calledOnce(a.getResult);
    sinon.assert.calledWith(logSpy, 'faked result');
  });
});

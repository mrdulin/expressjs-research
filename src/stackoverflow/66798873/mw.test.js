const proxyquire = require('proxyquire');
const sinon = require('sinon');

describe('66798873', () => {
  it('should pass', () => {
    const getEmployerId = sinon.stub();
    const setEmployerDetails = proxyquire('./mw', {
      './employerApi': { getEmployerId },
    });
    const mReq = {};
    const mRes = {};
    const mNext = sinon.stub();
    setEmployerDetails(123)(mReq, mRes, mNext);
    sinon.assert.calledWithExactly(getEmployerId, {}, {}, mNext, 123);
  });
});

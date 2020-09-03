const { defaultLogger } = require('./logger');
const sinon = require('sinon');
const chai = require('chai');
const { expect } = chai;

describe('63618186', () => {
  it('should return a log message ', () => {
    const loggerStub = {
      info: sinon.stub().returns('anything'),
    };
    sinon.stub(defaultLogger, 'child').returns(loggerStub);
    const service = require('./service');
    const actual = service.logResponse();
    expect(actual).to.be.equal('anything');
    sinon.assert.calledOnce(defaultLogger.child);
    sinon.assert.calledWithExactly(loggerStub.info, 'successful');
  });
});

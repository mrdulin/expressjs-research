import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe('61027051', () => {
  it('should pass', () => {
    const winstonStub = {
      createLogger: sinon.stub(),
      format: {
        combine: sinon.stub(),
        timestamp: sinon.stub(),
        json: sinon.stub(),
      },
      transports: {
        Console: sinon.stub(),
      },
    };
    proxyquire('./logger', {
      winston: winstonStub,
    });
    sinon.assert.calledWith(winstonStub.createLogger, {
      level: 'debug',
      format: sinon.match.any,
      transports: sinon.match.array,
    });
  });
});

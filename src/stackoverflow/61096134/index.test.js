const sinon = require('sinon');
const redis = require('redis');

describe('61096134', () => {
  let logSpy;
  beforeEach(() => {
    logSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    sinon.restore();
    delete require.cache[require.resolve('./')];
  });
  it('should return an error if server refused the connection', () => {
    const options = { error: { code: 'ECONNREFUSED' } };
    let returnValue;
    const createClientStub = sinon.stub(redis, 'createClient').callsFake((clientOpts) => {
      returnValue = clientOpts.retry_strategy(options);
    });
    require('./');
    sinon.assert.match(returnValue.message, 'The server refused the connection');
    sinon.assert.calledWithExactly(createClientStub, { retry_strategy: sinon.match.func });
    sinon.assert.calledWithExactly(logSpy, 'redis', 'The server refused the connection', 'error');
  });
  it('should return an error if server reset the connection', () => {
    const options = { error: { code: 'ECONNRESET' } };
    let returnValue;
    const createClientStub = sinon.stub(redis, 'createClient').callsFake((clientOpts) => {
      returnValue = clientOpts.retry_strategy(options);
    });
    require('./');
    sinon.assert.match(returnValue.message, 'The server reset the connection');
    sinon.assert.calledWithExactly(createClientStub, { retry_strategy: sinon.match.func });
    sinon.assert.calledWithExactly(logSpy, 'redis', 'The server reset the connection', 'error');
  });

  it('should return an error if server timeouted the connection', () => {
    const options = { error: { code: 'ETIMEDOUT' } };
    let returnValue;
    const createClientStub = sinon.stub(redis, 'createClient').callsFake((clientOpts) => {
      returnValue = clientOpts.retry_strategy(options);
    });
    require('./');
    sinon.assert.match(returnValue.message, 'The server timeouted the connection');
    sinon.assert.calledWithExactly(createClientStub, { retry_strategy: sinon.match.func });
    sinon.assert.calledWithExactly(logSpy, 'redis', 'The server timeouted the connection', 'error');
  });

  it('should return an error if retry time exhausted', () => {
    const options = { total_retry_time: 1000 * 60 * 61 };
    let returnValue;
    const createClientStub = sinon.stub(redis, 'createClient').callsFake((clientOpts) => {
      returnValue = clientOpts.retry_strategy(options);
    });
    require('./');
    sinon.assert.match(returnValue.message, 'Retry time exhausted');
    sinon.assert.calledWithExactly(createClientStub, { retry_strategy: sinon.match.func });
    sinon.assert.calledWithExactly(logSpy, 'redis', 'Retry time exhausted', 'error');
  });

  it('should return undefined if retry attempt exceed', () => {
    const options = { attempt: 11 };
    let returnValue;
    const createClientStub = sinon.stub(redis, 'createClient').callsFake((clientOpts) => {
      returnValue = clientOpts.retry_strategy(options);
    });
    require('./');
    sinon.assert.match(returnValue, undefined);
    sinon.assert.calledWithExactly(createClientStub, { retry_strategy: sinon.match.func });
    sinon.assert.calledWithExactly(logSpy, 'redis', 'Retry attempt exceed', 'error');
  });

  it('should return retry stragegy', () => {
    const options = { attempt: 5 };
    let returnValue;
    const createClientStub = sinon.stub(redis, 'createClient').callsFake((clientOpts) => {
      returnValue = clientOpts.retry_strategy(options);
    });
    require('./');
    sinon.assert.match(returnValue, 500);
    sinon.assert.calledWithExactly(createClientStub, { retry_strategy: sinon.match.func });
  });
});

const sinon = require('sinon');
const rewire = require('rewire');
const Promise = require('bluebird');

describe('61659908', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should pass', async () => {
    const promiseTrySpy = sinon.spy(Promise, 'try');
    const logSpy = sinon.spy(console, 'log');
    const indexRewired = rewire('./');
    const accounts = [{ id: 1 }, { id: 2 }];
    const fakeMultiAccountInstance = {
      all: sinon.stub().resolves(accounts),
    };
    indexRewired.__set__('MultiAccountInstance', fakeMultiAccountInstance);
    await indexRewired();
    sinon.assert.calledOnce(fakeMultiAccountInstance.all);
    sinon.assert.calledWith(logSpy, [{ id: 1 }, { id: 2 }]);
    sinon.assert.calledOnce(promiseTrySpy);
  });
});

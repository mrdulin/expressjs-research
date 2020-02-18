import proxyquire from 'proxyquire';
import sinon from 'sinon';
import { expect } from 'chai';

describe('request-promise-retry', () => {
  it('should retry failure 4 times with Exponential Backoff strategy, then retry success', async () => {
    const mError = { statusCode: 429 };
    const rpStub = sinon
      .stub()
      .onCall(0)
      .rejects(mError)
      .onCall(1)
      .rejects(mError)
      .onCall(2)
      .rejects(mError)
      .onCall(3)
      .rejects(mError)
      .onCall(4)
      .resolves('success');
    const { requestWithExponentialBackoff } = proxyquire('./request-promise-retry', {
      'request-promise': rpStub,
    });
    const logSpy = sinon.spy(console, 'log');
    const res = await requestWithExponentialBackoff('github.com');
    expect(res).to.be.eql('success');
    sinon.assert.callCount(rpStub, 5);
    sinon.assert.callCount(logSpy, 4);
    // Give mocha enough time to run, so that we can test the retry
  }).timeout(30 * 1000);
});

import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe('70241641', () => {
  it('should second return', async () => {
    const rpStub = sinon.stub().onCall(0).resolves(true).onCall(1).resolves(true);
    const { apiRequests } = proxyquire('./apiRequest', {
      'request-promise': rpStub,
    });
    const actual = await apiRequests('test data');
    sinon.assert.match(actual, 'Second return');
  });

  it('should first second', async () => {
    const rpStub = sinon.stub().onCall(0).resolves(false).onCall(1).resolves(true);
    const { apiRequests } = proxyquire('./apiRequest', {
      'request-promise': rpStub,
    });
    const actual = await apiRequests('test data');
    sinon.assert.match(actual, 'First return');
  });
});

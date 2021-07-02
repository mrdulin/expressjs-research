import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe('68212908', () => {
  it('should pass', async () => {
    const axiosStub = sinon.stub().resolves('mocked response');
    const { getName } = proxyquire('./getName', {
      axios: axiosStub,
    });
    const actual = await getName();
    sinon.assert.match(actual, 'mocked response');
    sinon.assert.calledWithExactly(axiosStub, {
      method: 'GET',
      url: 'someUrl',
      headers: {},
    });
  });
});

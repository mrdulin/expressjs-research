const request = require('./main');
const sinon = require('sinon');

const flushPromises = () => new Promise(setImmediate);

describe('1010000015955091', () => {
  let clock;
  before(() => {
    clock = sinon.useFakeTimers({ toFake: ['setTimeout'] });
  });
  after(() => {
    clock.restore();
  });
  it('should success', async () => {
    const onSuccessStub = sinon.stub();
    const onErrorStub = sinon.stub();
    request(onSuccessStub, onErrorStub);
    clock.tick(1000);
    await flushPromises();
    sinon.assert.calledWithExactly(onSuccessStub, 'ok');
  });
});

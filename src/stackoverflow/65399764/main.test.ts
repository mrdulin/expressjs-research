import sinon from 'sinon';
import proxyquire from 'proxyquire';
import { expect } from 'chai';

describe('65399764', () => {
  it('should pass', async () => {
    const countdownInstanceStub = {
      save: sinon.stub(),
    };
    const CountdownStub = sinon.stub().returns(countdownInstanceStub);
    const { PersistentTimer } = proxyquire('./main.ts', {
      './database/orm': {
        Countdown: CountdownStub,
      },
    });
    const persistentTimer = await PersistentTimer.create();
    sinon.assert.calledOnce(CountdownStub);
    sinon.assert.calledOnce(countdownInstanceStub.save);
    expect(persistentTimer).to.be.instanceOf(PersistentTimer);
  });
});

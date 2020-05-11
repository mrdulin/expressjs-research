import { MyService } from './service';
import sinon from 'sinon';
import { expect } from 'chai';

describe('61695981', () => {
  let clock;
  before(() => {
    clock = sinon.useFakeTimers();
  });

  after(() => {
    clock.restore();
  });

  it('should pass', async () => {
    const service = new MyService();
    const ansPromise = service.doSomething();
    clock.tick(5000);
    const ans = await ansPromise;
    expect(ans).to.equal('Done');
  });
});

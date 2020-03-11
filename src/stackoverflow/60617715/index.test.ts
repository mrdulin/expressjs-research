import { main } from './';
import sinon, { SinonFakeTimers } from 'sinon';

describe('60617715', () => {
  let clock: SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });
  afterEach(() => {
    clock.restore();
  });
  it('should pass', async () => {
    await main(5000, clock);
  });
});

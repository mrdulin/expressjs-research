import { middleware } from './';
import { Request } from 'express';
import sinon, { SinonFakeTimers } from 'sinon';

describe('56676480', () => {
  let clock: SinonFakeTimers;
  before(() => {
    clock = sinon.useFakeTimers();
  });
  after(() => {
    clock.restore();
  });
  it('should pass', () => {
    const mReq = {} as Request;
    const mRes = { json: sinon.stub() } as any;
    const mNext = sinon.stub();
    middleware(mReq, mRes, mNext);
    clock.tick(1000);
    sinon.assert.calledWithExactly(mRes.json, { status: 'blocked' });
  });
});

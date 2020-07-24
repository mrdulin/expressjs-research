import { ping, health } from './';
import sinon from 'sinon';

describe('63065938', () => {
  describe('#ping', () => {
    it('should pass', () => {
      const mReq = {};
      const mRes = { send: sinon.stub() };
      ping(mReq, mRes as any);
      sinon.assert.calledWith(mRes.send, 'pong');
    });
  });

  describe('#health', () => {
    it('should pass', () => {
      const mReq = {};
      const mRes = { send: sinon.stub() };
      health(mReq, mRes as any);
      sinon.assert.calledWith(mRes.send, 'OK');
    });
  });
});

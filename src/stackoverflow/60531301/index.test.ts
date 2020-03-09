import { queMessage, logger } from './';
import sinon from 'sinon';
import { expect } from 'chai';

describe('60531301', () => {
  it('should send to queue successfully', async () => {
    const channelStub = {
      sendToQueue: sinon.stub().callsFake((queue, buffer, opts, callback) => {
        callback(null, 'ok');
      }),
    };
    const verboseLogSpy = sinon.spy(logger, 'verbose');
    await queMessage(channelStub, 'queue', 'some message');
    sinon.assert.calledWithExactly(verboseLogSpy, 'Pushed message to %s queue successfully.', 'queue');
  });

  it('should handle error if send to queue failure', async () => {
    const mError = new Error('network');
    const channelStub = {
      sendToQueue: sinon.stub().callsFake((queue, buffer, opts, callback) => {
        callback(mError, null);
      }),
    };
    const errorLogSpy = sinon.spy(logger, 'error');
    try {
      await queMessage(channelStub, 'queue', 'some message');
    } catch (error) {
      expect(error).to.be.eql(mError);
    }
    sinon.assert.calledWithExactly(errorLogSpy, 'Error pushing message to %s queue. %o', 'queue', mError);
  });
});

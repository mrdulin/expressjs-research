import rewire from 'rewire';
import sinon from 'sinon';

describe('60828989', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should print log if info is undefined', async () => {
    const mod = rewire('./');
    const fetchInfoStub = sinon.stub().resolves();
    const logSpy = sinon.spy(console, 'log');
    mod.__set__('fetchInfo', fetchInfoStub);
    const event = { config: { id: 1 } };
    const otherConfig = { detailsPath: 'http:/localhost' };
    await mod.onConfigEvent(event, otherConfig);
    sinon.assert.calledWithExactly(logSpy, 'info is undefined.');
  });
  it('should do nothing if info is defined', async () => {
    const mod = rewire('./');
    const fetchInfoStub = sinon.stub().resolves({});
    const logSpy = sinon.spy(console, 'log');
    mod.__set__('fetchInfo', fetchInfoStub);
    const event = { config: { id: 1 } };
    const otherConfig = { detailsPath: 'http:/localhost' };
    await mod.onConfigEvent(event, otherConfig);
    sinon.assert.notCalled(logSpy);
  });
});

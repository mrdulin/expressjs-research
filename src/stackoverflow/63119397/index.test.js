const sinon = require('sinon');

describe('63119397', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should print warning message', () => {
    const warning = {
      message: 'go',
      stack: 'go:13',
    };
    sinon.stub(process, 'on').callsFake((event, callback) => {
      callback(warning);
    });
    const infoSpy = sinon.spy(console, 'info');
    require('./');
    sinon.assert.calledWith(process.on, 'warning', sinon.match.func);
    sinon.assert.calledWith(infoSpy, 'Warning, Message: go Stack: go:13', 'warning');
  });
});

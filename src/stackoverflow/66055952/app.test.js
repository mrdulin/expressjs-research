const https = require('https');
const sinon = require('sinon');

describe('66055952', () => {
  beforeEach(() => {
    delete require.cache[require.resolve('./app')];
  });
  afterEach(() => {
    sinon.restore();
  });
  it('should get and print data', () => {
    let onDataCallback;
    let onEndCallback;
    const resp = {
      on: sinon.stub().callsFake((event, callback) => {
        if (event === 'data') {
          onDataCallback = callback;
        } else if (event === 'end') {
          onEndCallback = callback;
        }
      }),
    };
    const httpsContext = { on: sinon.stub() };
    sinon.stub(https, 'get').callsFake((endpoint, callback) => {
      callback(resp);
      return httpsContext;
    });
    const logSpy = sinon.stub(console, 'log');
    require('./app');
    onDataCallback('{ "message"');
    onDataCallback(': "teresa teng", "status": 200 }');
    onEndCallback();
    sinon.assert.calledWith(https.get, 'https://dog.ceo/api/breeds/list/all', sinon.match.func);
    sinon.assert.calledWith(httpsContext.on, 'error', sinon.match.func);
    sinon.assert.calledWith(logSpy, 'teresa teng');
    sinon.assert.calledWith(logSpy, 200);
  });

  it('should handle error', () => {
    const err = new Error('network');
    const httpsContext = {
      on: sinon.stub().callsFake((event, callback) => {
        callback(err);
      }),
    };
    sinon.stub(https, 'get').returns(httpsContext);
    const logStub = sinon.stub(console, 'log');
    require('./app');
    sinon.assert.calledWith(logStub, 'Error: network');
  });
});

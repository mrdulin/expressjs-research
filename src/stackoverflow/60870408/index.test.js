const sinon = require('sinon');
const redis = require('redis');

describe('60870408', () => {
  beforeEach(() => {
    process.env['hostName'] = '127.0.0.1';
    process.env['port'] = 6379;
    process.env['key'] = 'test';
  });
  afterEach(() => {
    delete require.cache[require.resolve('./')];
    sinon.restore();
  });
  it('should get value', async () => {
    const client = {
      get: sinon.stub().callsFake((key, callback) => callback(null, 'elsa')),
    };
    const createClientStub = sinon.stub(redis, 'createClient').returns(client);
    const { getKeyValue } = require('./');
    sinon.assert.calledWithExactly(createClientStub, '6379', '127.0.0.1', {
      auth_pass: 'test',
      tls: { serverName: '127.0.0.1' },
    });
    const actual = await getKeyValue('name', {});
    sinon.assert.match(actual, 'elsa');
    sinon.assert.calledWithExactly(client.get, 'name', sinon.match.func);
  });

  it('should handle error', async () => {
    const mError = new Error('network');
    const client = {
      get: sinon.stub().callsFake((key, callback) => callback(mError)),
    };
    const createClientStub = sinon.stub(redis, 'createClient').returns(client);
    const { getKeyValue } = require('./');
    sinon.assert.calledWithExactly(createClientStub, '6379', '127.0.0.1', {
      auth_pass: 'test',
      tls: { serverName: '127.0.0.1' },
    });
    const actual = await getKeyValue('name', {});
    sinon.assert.match(actual, mError);
    sinon.assert.calledWithExactly(client.get, 'name', sinon.match.func);
  });
});

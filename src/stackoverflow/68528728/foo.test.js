var proxyquire = require('proxyquire'),
  assert = require('assert');

describe('Test', () => {
  it('1', async () => {
    const requestStub = function (option, callback) {
      console.log('Request Stub');
      callback(null, 'a', 'b');
    };
    var foo = proxyquire('./foo', { request: requestStub });

    var actual = await foo.getRequest('file.txt');
    assert.deepStrictEqual(actual, { response: 'a', body: 'b' });
  });
});

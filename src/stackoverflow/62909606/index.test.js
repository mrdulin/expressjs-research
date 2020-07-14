const main = require('./');
const redis = require('redis');
const sinon = require('sinon');

describe('62909606', () => {
  it('should pass', () => {
    const createClientStub = sinon.stub(redis, 'createClient').callsFake(function() {
      console.log('mock redis called');
    });
    main();
    sinon.assert.calledOnce(createClientStub);
  });
});

const sinon = require('sinon');
const expect = require('chai').expect;
const AWS = require('aws-sdk');

describe('Bogus Test', () => {
  let sandbox, deleteMessageStub;

  beforeEach(() => {
    sandbox = sinon.createSandbox();

    deleteMessageStub = sandbox.fake.returns({ promise: () => Promise.resolve({}) });
    sandbox.stub(AWS, 'SQS').returns({
      deleteMessage: deleteMessageStub,
    });
    delete require.cache[require.resolve('./bogus')];
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('is the first test', () => {
    const bogus = require('./bogus');
    return bogus.handler().then(() => {
      expect(deleteMessageStub.callCount).to.equal(1, 'Should have called deleteMessage once');
    });
  });

  it('is the second test', () => {
    const bogus = require('./bogus');
    return bogus.handler().then(() => {
      expect(deleteMessageStub.callCount).to.equal(1, 'Should have called deleteMessage once');
    });
  });
});

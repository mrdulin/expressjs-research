const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('Unit tests for twitter helper', () => {
  it('should create a mock twit object', () => {
    const twitInstanceStub = { post: sinon.stub() };
    const TwitStub = sinon.stub().returns(twitInstanceStub);
    const twitterHelper = proxyquire('./twitterHelper', {
      twit: TwitStub,
    });
    twitterHelper.updateStatus({ status: 'New status' });
    sinon.assert.calledWithExactly(TwitStub, {
      consumer_key: 'consumer_key',
      consumer_secret: 'consumer_secret',
      access_token: 'access_token',
      access_token_secret: 'access_token_secret',
    });
    sinon.assert.calledWithExactly(
      twitInstanceStub.post,
      'statuses/update',
      { status: 'New status' },
      sinon.match.func,
    );
  });
});

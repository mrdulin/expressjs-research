const chai = require('chai');
const rewire = require('rewire');
const sinon = require('sinon');
const { expect } = chai;

describe('csurf middleware', () => {
  it('should be called once as app.use arg', (done) => {
    const appFactory = rewire('./app-factory');
    const mCsurfRequestHandler = sinon.stub();
    const mCsurf = sinon.stub().returns(mCsurfRequestHandler);
    const mCookieParserRequestHandler = sinon.stub();
    const mCookieParser = sinon.stub().returns(mCookieParserRequestHandler);
    appFactory.__with__({
      csurf: mCsurf,
      cookieParser: mCookieParser,
    })(() => {
      const appUseStub = sinon.stub(appFactory.app, 'use');
      const appInstance = new appFactory.AppFactory();
      const actual = appInstance.createApp();
      expect(actual).to.be.equal(appFactory.app);
      sinon.assert.calledWithExactly(mCsurf, { cookie: true });
      sinon.assert.calledOnce(mCookieParser);
      sinon.assert.calledWith(appUseStub, mCsurfRequestHandler);
      sinon.assert.calledWith(appUseStub, mCookieParserRequestHandler);
      done();
    });
  });
});

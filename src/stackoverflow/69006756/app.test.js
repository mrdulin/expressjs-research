const proxyquire = require('proxyquire');
const sinon = require('sinon');

describe('69006756', () => {
  it('should pass', () => {
    const expressStub = {
      get: sinon.stub(),
      listen: sinon.stub(),
    };
    const ExpressStub = sinon.stub().returns(expressStub);
    const CommunicationsApplication = proxyquire('./app', {
      express: ExpressStub,
    });
    const application = new CommunicationsApplication();
    sinon.assert.calledWithExactly(application.app.get, '/', sinon.match.func);
    sinon.assert.calledWithExactly(application.app.listen, 3000, sinon.match.func);
  });
});

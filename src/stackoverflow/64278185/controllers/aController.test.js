const proxyquire = require('proxyquire');
const sinon = require('sinon');

describe('aController', () => {
  it('should pass', () => {
    const sqlConnection = {};
    const req = { models: {}, a: 'a', b: 'b' };
    const aService = { aServiceFunction: sinon.stub() };
    const serviceFactory = sinon.stub().returns(aService);
    const ControllerFactory = proxyquire('./aController', {
      '../services/aService': serviceFactory,
    });
    const { aControllerFunction } = ControllerFactory(sqlConnection);
    aControllerFunction(req);
    sinon.assert.calledWithExactly(serviceFactory, {}, {});
    sinon.assert.calledWithExactly(aService.aServiceFunction, 'a', 'b');
  });
});

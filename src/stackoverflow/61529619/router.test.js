var sinon = require('sinon');
var express = require('express');

describe('61529619', () => {
  it('should pass', () => {
    const routerStub = {
      route: sinon.stub().returnsThis(),
      post: sinon.stub().returnsThis(),
      get: sinon.stub().returnsThis(),
      put: sinon.stub().returnsThis(),
      delete: sinon.stub().returnsThis(),
    };
    sinon.stub(express, 'Router').callsFake(() => routerStub);
    require('./router');
    sinon.assert.calledWith(routerStub.route, '/');
    sinon.assert.calledWith(routerStub.route, '/:id');
    sinon.assert.calledWith(routerStub.get, sinon.match.func);
    sinon.assert.calledWith(routerStub.post, sinon.match.func);
    sinon.assert.calledWith(routerStub.put, sinon.match.func);
    sinon.assert.calledWith(routerStub.delete, sinon.match.func);
  });
});

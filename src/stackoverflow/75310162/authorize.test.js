const sinon = require('sinon');
const authorizeMiddleware = require('./authorize');

describe('Authorize Middleware Tests', function () {
  it('Should return unauthorized message when A User With The wrong Role', function () {
    const req = {
      USER: { id: 1, role: 'guest' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    authorizeMiddleware.authorizeStrategy(['admin'])(req, res);
    sinon.assert.calledWithExactly(res.status, 403);
    sinon.assert.calledWithExactly(res.json, { message: 'Unauthorized' });
  });

  it('Should Authorize A User With The Right Role', function () {
    const req = {
      USER: { id: 1, role: 'admin' },
    };
    const res = {};
    const next = sinon.stub();
    authorizeMiddleware.authorizeStrategy(['admin'])(req, res, next);
    sinon.assert.calledOnce(next);
  });
});

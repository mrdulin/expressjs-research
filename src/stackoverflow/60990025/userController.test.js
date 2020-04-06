const sinon = require('sinon');

describe('userController', () => {
  describe('#getUser', () => {
    it('should pass', () => {
      global.env = {};
      global.env.config = { user: { name: 'jane' } };
      const userController = require('./userController');
      const mReq = {};
      const mRes = { json: sinon.stub() };
      userController.getUser(mReq, mRes);
      sinon.assert.calledWithExactly(mRes.json, { name: 'jane' });
    });
  });
});

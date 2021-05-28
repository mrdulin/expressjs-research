const sinon = require('sinon');
const { getPeopleHandler } = require('./get-people-handler');
const myAPI = require('./api');

describe('handle error', () => {
  let req;
  let res;
  let sandbox;
  describe('getPeopleHandler() with error', () => {
    before(() => {
      req = {
        session: {},
      };
      res = {
        render: () => ({}),
      };

      sandbox = sinon.createSandbox();
    });
    beforeEach(() => {
      sandbox.stub(myAPI, 'getPeople').returns([500, { errorCode: '500' }]);
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should render the error page', async () => {
      sandbox.stub(res, 'render').returns({});
      res.locals = {};
      await getPeopleHandler(req, res);
      sinon.assert.calledWithExactly(res.render, 'error.html');
    });
  });
});

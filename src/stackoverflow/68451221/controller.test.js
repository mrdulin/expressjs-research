const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('controller API testing', () => {
  it('should call getMarketId function and return status 200 on success', async () => {
    const req = {};
    const res = { json: sinon.stub(), status: 200 };
    const axiosStub = sinon.stub().resolves({ data: { greet: 'hello' } });
    const controller = proxyquire('./controller', {
      axios: axiosStub,
    });
    await controller.getData(req, res);
    sinon.assert.calledWithExactly(axiosStub, {
      method: 'GET',
      headers: {},
      url: 'http://localhost:3000/api',
      params: {},
    });
    sinon.assert.calledWithExactly(res.json, { greet: 'hello' });
  });
});

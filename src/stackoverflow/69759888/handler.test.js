const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('69759888', () => {
  it('should pass', async () => {
    const getCompanyStub = sinon.stub().resolves({});
    const Handler = proxyquire('./handler', {
      './helper': {
        getCompany: getCompanyStub,
      },
    });
    const handler = new Handler();
    await handler.init();
  });
});

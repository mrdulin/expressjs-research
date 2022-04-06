const sinon = require('sinon');
const { functionUnderTest } = require('./module');

describe('module', function () {
  let sandbox;
  let mockHelper;
  const transaction = {};

  beforeEach(function () {
    sandbox = sinon.createSandbox();
    mockHelper = {
      transaction: sandbox.stub().callsFake(async (callback) => {
        await callback(transaction);
      }),
      doSomething: sandbox.stub().resolves({}),
      doSomething2: sandbox.stub().resolves({}),
      expectedToBeCalled: sandbox.stub().resolves({}),
    };
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('the former function should be called', async function () {
    await functionUnderTest(mockHelper);
    sinon.assert.calledOnce(mockHelper.doSomething);
  });

  it('the latter function should be called', async function () {
    await functionUnderTest(mockHelper);
    sinon.assert.calledOnce(mockHelper.expectedToBeCalled);
  });
});

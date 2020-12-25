const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { resetModule } = require('../utils/test');
chai.use(chaiAsPromised);
const { expect } = chai;

describe('create test suite', () => {
  let inputStub;
  before(() => {
    resetModule();
    inputStub = require('../stubs/input');
    inputStub.resolves(true);
  });
  after(() => {
    inputStub.restore();
  });
  it('should pass', async () => {
    await expect(inputStub()).to.eventually.be.true;
  });
});

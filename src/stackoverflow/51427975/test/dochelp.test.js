const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { resetModule } = require('../utils/test');
chai.use(chaiAsPromised);
const { expect } = chai;

describe('dochelp test suite', () => {
  let inputStub;
  before(() => {
    resetModule();
    inputStub = require('../stubs/input');
    inputStub.resolves(false);
  });
  after(() => {
    inputStub.restore();
  });
  it('should pass', async () => {
    await expect(inputStub()).to.eventually.be.false;
  });
});

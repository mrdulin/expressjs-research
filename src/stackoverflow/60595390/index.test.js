const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('60595390', () => {
  it('should extract all', async () => {
    const admZipInstance = {
      extractAllTo: sinon.stub(),
    };
    const admZipStub = sinon.stub().callsFake(() => admZipInstance);
    const main = proxyquire('./', {
      'adm-zip': admZipStub,
    });
    await main();
    sinon.assert.calledWithExactly(admZipStub, 'some file path');
    sinon.assert.calledWithExactly(admZipInstance.extractAllTo, './dist', true);
  });
});

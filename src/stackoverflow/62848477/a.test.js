const B = require('./b');
const sinon = require('sinon');
const { expect } = require('chai');

describe('a', () => {
  it('should pass', async () => {
    const getDataFromDbStub = sinon.stub(B.prototype, 'getDataFromDb').resolves('24f475b6-f9fa-495b-83f4-16f6b45b0a6a');
    const A = require('./a');
    const aDao = new A();
    const guid = await aDao.getGuid();
    expect(guid).to.be.equal('24f475b6-f9fa-495b-83f4-16f6b45b0a6a');
    sinon.assert.calledOnce(getDataFromDbStub);
    getDataFromDbStub.restore();
  });
});

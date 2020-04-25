const sinon = require('sinon');
const proxyquire = require('proxyquire');
const { expect } = require('chai');

describe('61412987', () => {
  it('should pass', async () => {
    const lstatStub = sinon.stub().resolves('fake data');
    const utilStub = { promisify: sinon.stub().callsFake(() => lstatStub) };
    const doSomethng = proxyquire('./main', {
      util: utilStub,
    });

    const actual = await doSomethng('/root/avatar.jpg');
    expect(actual).to.be.equal('fake data');
    sinon.assert.calledOnce(utilStub.promisify);
    sinon.assert.calledWithExactly(lstatStub, '/root/avatar.jpg');
  });
});

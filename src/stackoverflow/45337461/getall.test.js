const proxyquire = require('proxyquire');
const sinon = require('sinon');
const { expect } = require('chai');

describe('45337461', () => {
  it('should pass', async () => {
    const someapiserviceStub = sinon.stub().callsFake((id) => {
      return Promise.resolve(`fake data with id: ${id}`);
    });
    const getall = proxyquire('./getall', {
      './someapiservice': someapiserviceStub,
    });
    const actual = await getall([{ id: 1 }, { id: 2 }, { id: 3 }]);
    expect(actual).to.deep.equal(['fake data with id: 1', 'fake data with id: 2', 'fake data with id: 3']);
    sinon.assert.calledThrice(someapiserviceStub);
  });
});

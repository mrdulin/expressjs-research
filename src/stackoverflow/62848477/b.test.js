const sinon = require('sinon');
const connection = require('./connection');
const B = require('./b');
const { expect } = require('chai');

describe('b', () => {
  it('should pass', async () => {
    const dbStub = {
      one: sinon.stub().resolves({
        guid: '24f475b6-f9fa-495b-83f4-16f6b45b0a6a',
        created_on: '123',
      }),
    };
    const getDbStub = sinon.stub(connection, 'getDb').returns(dbStub);
    const dao = new B();
    const guid = await dao.getDataFromDb();
    expect(guid).to.equal('24f475b6-f9fa-495b-83f4-16f6b45b0a6a');
    sinon.assert.calledOnce(getDbStub);
    sinon.assert.calledWith(dbStub.one, 'SELECT guid FROM table', ['NONE']);
    getDbStub.restore();
  });
});

const a = require('./a');
const dbConnection = require('./db-connection.js');
const sinon = require('sinon');

describe('a', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should find some docs', () => {
    const collectionStub = {
      find: sinon.stub(),
    };
    sinon.stub(dbConnection.db, 'collection').returns(collectionStub);
    const actual = a();
    sinon.assert.match(actual, true);
    sinon.assert.calledWithExactly(dbConnection.db.collection, 'test');
    sinon.assert.calledOnce(collectionStub.find);
  });
});

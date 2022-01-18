const sinon = require('sinon');

describe('a', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should find some docs', () => {
    process.env.MONGO_URL = 'mongodb://localhost:27017';
    const a = require('./a');
    const dbConnection = require('./db-connection.js');

    const dbStub = {
      collection: sinon.stub().returnsThis(),
      find: sinon.stub(),
    };
    sinon.stub(dbConnection, 'db').get(() => dbStub);
    const actual = a();
    sinon.assert.match(actual, true);
    sinon.assert.calledWithExactly(dbStub.collection, 'test');
    sinon.assert.calledOnce(dbStub.find);
  });
});

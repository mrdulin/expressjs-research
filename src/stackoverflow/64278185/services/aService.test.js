const serviceFactory = require('./aService');
const sinon = require('sinon');

describe('aService', () => {
  it('should pass', () => {
    const sqlConnection = {
      queryAsync: sinon.stub(),
    };
    const models = {
      aModel: {
        update: sinon.stub(),
      },
    };
    const { aServiceFunction } = serviceFactory(sqlConnection, models);
    aServiceFunction('a', 'b');
    sinon.assert.calledWithExactly(models.aModel.update, 'a');
    sinon.assert.calledWithExactly(sqlConnection.queryAsync, 'UPDATE... a');
  });
});

const sinon = require('sinon');
const { check } = require('./check');

describe('76045264', () => {
  it('should return when client does not returns an err', (done) => {
    const fakeClient = { query: sinon.stub().resolves() };
    const mysqlCheck = check.mysql(fakeClient);

    mysqlCheck((err, report) => {
      sinon.assert.calledWithExactly(fakeClient.query, 'SELECT 1+1 AS result')
      sinon.assert.match(report, { success: true })
      sinon.assert.match(err, null)
      done();
    });
  });
})
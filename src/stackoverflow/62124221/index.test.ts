import MySQL from '.';
import sinon from 'sinon';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const expect = chai.expect;
const mysql = require('mysql');

describe('62124221', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should return query results', async () => {
    const mRows = [1, 2];
    const mConn = {
      query: sinon.stub().callsFake((sql, args, callback) => {
        callback(null, mRows);
      }),
    };
    sinon.stub(mysql, 'createConnection').returns(mConn);
    const db = new MySQL('host', 'user', 'password', 'database');
    const actual = await db.query('select 1;', 'args');
    expect(actual).to.be.deep.equal([1, 2]);
    sinon.assert.calledWithExactly(mysql.createConnection, {
      host: 'host',
      port: 3306,
      user: 'user',
      password: 'password',
      database: 'database',
    });
    sinon.assert.calledWithExactly(mConn.query, 'select 1;', 'args', sinon.match.func);
  });

  it('should return handle error', async () => {
    const mError = new Error('network');
    const mConn = {
      query: sinon.stub().callsFake((sql, args, callback) => {
        callback(mError);
      }),
    };
    sinon.stub(mysql, 'createConnection').returns(mConn);
    const db = new MySQL('host', 'user', 'password', 'database');
    await expect(db.query('select 1;', 'args')).to.be.rejectedWith('network');
    sinon.assert.calledWithExactly(mysql.createConnection, {
      host: 'host',
      port: 3306,
      user: 'user',
      password: 'password',
      database: 'database',
    });
    sinon.assert.calledWithExactly(mConn.query, 'select 1;', 'args', sinon.match.func);
  });
});

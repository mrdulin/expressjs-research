const conns = require('./connection');
const sinon = require('sinon');
const mysql2 = require('mysql2');
const { expect } = require('chai');

describe('handler', () => {
  it('Test insert from Connection', async () => {
    const options = {
      host: 'testHost',
      user: 'testUser',
      password: 'testPassword',
    };

    const results = { affectedRows: 1 };
    const poolStub = {
      getConnection: sinon.stub().returnsThis(),
      query: sinon.stub().callsFake((sql, values, callback) => {
        callback(null, results);
      }),
    };

    const createPoolStub = sinon.stub(mysql2, 'createPool').returns(poolStub);
    const conn = new conns.Connection(options);
    conn.createPool();
    const actual = await conn.insert('select 1 + 1 as solution', []);
    expect(actual).to.be.eql(1);
    sinon.assert.calledWithExactly(poolStub.query, 'select 1 + 1 as solution', [[]], sinon.match.func);
    sinon.assert.calledWithExactly(createPoolStub, {
      host: 'testHost',
      user: 'testUser',
      password: 'testPassword',
      database: 'analytics_payor_admin',
      ssl: 'Amazon RDS',
      authPlugins: {
        mysql_clear_password: sinon.match.func,
      },
    });
    sinon.restore();
  });
});

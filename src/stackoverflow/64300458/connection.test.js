const mysql2 = require('mysql2/promise');
const conns = require('./connection');
const sinon = require('sinon');
const { expect } = require('chai');

describe('64300458', () => {
  it('Test creatPool function from connection class', () => {
    const options = {
      host: 'testHost',
      user: 'testUser',
      password: 'testPassword',
    };

    let configRef;
    const createPoolStub = sinon.stub(mysql2, 'createPool').callsFake((config) => {
      configRef = config;
    });

    const conn = new conns.Connection(options);
    conn.createPool();
    sinon.assert.calledOnce(createPoolStub);

    // test mysql_clear_password
    const actual = configRef.authPlugins.mysql_clear_password()();
    expect(actual).to.be.eql(Buffer.from('testPassword\0'));
    createPoolStub.restore();
  });
});

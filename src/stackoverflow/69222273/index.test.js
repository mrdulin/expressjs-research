const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('69222273', () => {
  it('should query result', async () => {
    process.env.HEROKU_POSTGRESQL_BLUE_URL = 'whatever';
    const res = { rows: [{ message: 'Hello world!' }] };
    const clientStub = { query: sinon.stub().resolves(res), release: sinon.stub() };
    const poolStub = { connect: sinon.stub().resolves(clientStub) };
    const pgStub = { Pool: sinon.stub().returns(poolStub) };
    const { queryWithParameter } = proxyquire('./', {
      pg: pgStub,
    });
    const actual = await queryWithParameter('SELECT $1::text as message', ['Hello world!']);
    sinon.assert.calledWithExactly(pgStub.Pool, {
      connectionString: 'whatever',
      ssl: {
        rejectUnauthorized: false,
      },
    });
    sinon.assert.calledOnce(poolStub.connect);
    sinon.assert.calledWithExactly(clientStub.query, 'SELECT $1::text as message', ['Hello world!']);
    sinon.assert.match(actual, [{ message: 'Hello world!' }]);
    sinon.assert.calledWithExactly(clientStub.release, true);
  });
});

const proxyquire = require('proxyquire');
const sinon = require('sinon');
var assert = sinon.assert;

describe('65940805', () => {
  it('valid user check test', async function () {
    const res = { rows: [{ email: 'fake_pk_value', password: 'pass' }] };
    const dbStub = {
      query: sinon.stub().resolves(res),
      release: sinon.stub(),
    };
    const poolInstanceStub = {
      connect: sinon.stub().resolves(dbStub),
    };
    const PoolStub = sinon.stub().returns(poolInstanceStub);
    const dbUtils = proxyquire('./main', {
      pg: {
        Pool: PoolStub,
      },
    });

    var result = await dbUtils.isValidUser('fake_pk_name', 'fake_pk_value', 'pass');
    assert.match(result, true);
    sinon.assert.calledWithExactly(PoolStub, {
      connectionString: `some connection string...`,
    });
    sinon.assert.calledOnce(poolInstanceStub.connect);
    sinon.assert.calledWithExactly(dbStub.query, sinon.match.string, ['fake_pk_value']);
    sinon.assert.calledOnce(dbStub.release);
  });
});

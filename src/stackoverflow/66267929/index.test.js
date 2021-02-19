const proxyquire = require('proxyquire');
const sinon = require('sinon');

const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('66267929', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should pass', async () => {
    const bigqueryClientStub = {
      dataset: sinon.stub().returnsThis(),
      table: sinon.stub().returnsThis(),
      insert: sinon.stub().resolves(),
    };
    const googleCloundBigqueryStub = {
      BigQuery: sinon.stub().returns(bigqueryClientStub),
    };
    const { sendtobigquery } = proxyquire('./', {
      '@google-cloud/bigquery': googleCloundBigqueryStub,
    });
    const data = Buffer.from('teresa teng').toString('base64');
    sendtobigquery({ data });
    await flushPromises();
    sinon.assert.calledOnce(googleCloundBigqueryStub.BigQuery);
    sinon.assert.calledWithExactly(bigqueryClientStub.dataset, 'dataset_name');
    sinon.assert.calledWithExactly(bigqueryClientStub.table, 'table_name');
    sinon.assert.calledWithExactly(bigqueryClientStub.insert, [{ field1: 'teresa teng' }]);
  });
});

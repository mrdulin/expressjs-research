import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe('62492844', () => {
  it('should pass', async () => {
    const rows = [{ id: 1 }, { id: 2 }];
    const job = {
      getQueryResults: sinon.stub().returns([rows]),
    };
    const bigquery = {
      createQueryJob: sinon.stub().returns([job]),
    };
    const BigQueryStub = sinon.stub().returns(bigquery);
    const BQ = proxyquire('./bq', {
      '@google-cloud/bigquery': { BigQuery: BigQueryStub },
    }).default;

    const bq = new BQ('projectId', './svc.json');
    sinon.assert.calledWithExactly(BigQueryStub, {
      projectId: 'projectId',
      keyFilename: './svc.json',
      autoRetry: true,
    });
    const actual = await bq.query('query');
    sinon.assert.calledWithExactly(bigquery.createQueryJob, { query: 'query', location: 'us' });
    sinon.assert.calledOnce(job.getQueryResults);
    sinon.assert.match(actual, rows);
  });
});

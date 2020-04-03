import { QueryService } from './queryService';
import { Athena } from './athena';
import sinon from 'sinon';

describe('60997196', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should pass', async () => {
    const startQueryExecutionStub = sinon.stub(Athena.prototype, 'startQueryExecution').returnsThis();
    const promiseStub = sinon.stub(Athena.prototype, 'promise').resolves('fake data');
    const queryService = new QueryService();
    const date: Date = new Date('2019-01-01');
    const actual = await queryService.query(date);
    sinon.assert.match(actual, 'fake data');
    sinon.assert.calledWithExactly(startQueryExecutionStub, {
      QueryString: `SELECT * FROM TABLE WHERE date='$date'`,
    });
    sinon.assert.calledOnce(promiseStub);
  });
});

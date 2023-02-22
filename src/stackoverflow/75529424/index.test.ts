import sinon from 'sinon';
import { func1 } from '.';
import { DBNAME } from './db';

describe('75529424', () => {
  it('mock db call', async () => {
    const dbDetails = {};
    sinon.stub(DBNAME, 'scope').returnsThis();
    sinon.stub(DBNAME, 'findAll').resolves(dbDetails);
    const res = await func1();
    sinon.assert.match(res, dbDetails);
  });
});

import * as api from './api';
import { loadmythings_1 } from './loadmythings_1';
import sinon from 'sinon';
import { expect } from 'chai';

describe('testing', () => {
  it('check list', async () => {
    const apptest = new loadmythings_1();
    const mockdata = [{ name: 'my_name' }];
    const stub = sinon.stub(api, 'getmythings').resolves(mockdata);
    const finalList = await apptest.loadmythings();
    sinon.assert.calledOnce(stub);
    expect(finalList).to.deep.equal([{ value: 'my_name' }]);
  });
});

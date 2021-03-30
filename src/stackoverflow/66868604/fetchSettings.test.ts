import { fetchSettings } from './fetchSettings';
import sinon from 'sinon';

describe('66868604', () => {
  it('should return data', async () => {
    const mData = {
      someDataOne: 'someDataOne',
      someDataTwo: 'someDataTwo',
    };
    const mRes = { data: sinon.stub().returns(mData) };
    const mFirestore = {
      collection: sinon.stub().returnsThis(),
      doc: sinon.stub().returnsThis(),
      get: sinon.stub().resolves(mRes),
    };
    const actual = await fetchSettings(mFirestore);
    sinon.assert.match(actual, { dataOne: 'someDataOne', dataTwo: 'someDataTwo' });
    sinon.assert.calledWithExactly(mFirestore.collection, 'someCollection');
    sinon.assert.calledWithExactly(mFirestore.doc, 'someDoc');
    sinon.assert.calledOnce(mFirestore.get);
    sinon.assert.calledOnce(mRes.data);
  });

  it('should handle error', async () => {
    const mErr = new Error('stackoverflow');
    const mFirestore = {
      collection: sinon.stub().returnsThis(),
      doc: sinon.stub().returnsThis(),
      get: sinon.stub().rejects(mErr),
    };
    const actual = await fetchSettings(mFirestore);
    sinon.assert.match(actual, mErr);
    sinon.assert.calledWithExactly(mFirestore.collection, 'someCollection');
    sinon.assert.calledWithExactly(mFirestore.doc, 'someDoc');
    sinon.assert.calledOnce(mFirestore.get);
  });
});

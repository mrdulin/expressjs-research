import { resolvers } from './resolver';
import sinon from 'sinon';
import { expect } from 'chai';

describe('65888128', () => {
  it('should pass', async () => {
    const mDb = {
      goalTemplate: {
        findAll: sinon.stub().resolves([1, 2, 3]),
      },
    };
    const actual = await resolvers.getTemplates({}, { first: 2 }, { db: mDb });
    expect(actual).to.be.eql([1, 2]);
    sinon.assert.calledOnce(mDb.goalTemplate.findAll);
  });
});

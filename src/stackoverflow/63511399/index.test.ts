import chai, { assert } from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

describe('63511399', () => {
  it('Throw an error', async () => {
    const retrieveException = async () => {
      throw new Error('This is an error');
    };
    return assert.isRejected(retrieveException(), Error);
  });
});

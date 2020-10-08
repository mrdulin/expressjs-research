import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { Class } from '.';

chai.use(chaiAsPromised);

describe('62596956', function() {
  it('Ensures throwError() throws error if no parameter is supplied.', async function() {
    const instance = new Class();
    await expect(instance.throwError(null)).to.eventually.rejectedWith(Error);
  });
});

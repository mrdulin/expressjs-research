import { main } from './main';
import sinon from 'sinon';
import AWS from 'aws-sdk';
import { expect } from 'chai';

describe('62400008', () => {
  it('should pass', async () => {
    const mKMS = {
      decrypt: sinon.stub().returnsThis(),
      promise: sinon.stub().resolves({
        Plaintext: 'some string',
        CiphertextBlob: Buffer.from('some string', 'utf-8'),
      }),
    };
    sinon.stub(AWS, 'KMS').callsFake(() => mKMS);
    const actual = await main();
    expect(actual).to.be.deep.equal({
      Plaintext: 'some string',
      CiphertextBlob: Buffer.from('some string', 'utf-8'),
    });
  });
});

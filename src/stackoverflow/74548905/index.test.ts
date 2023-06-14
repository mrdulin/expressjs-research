import { isCompliant } from ".";
import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised)

describe('74548905', () => {
  it('should pass', async () => {
    let retrieveConfig = sinon.stub();
    retrieveConfig.withArgs(true).resolves(true);
    retrieveConfig.withArgs(false).rejects(new Error('test error'));

    let partnerList = [true, false];

    const dataSources = {
      storageService: {
        retrieveConfig
      }
    };

    await expect(isCompliant(dataSources, partnerList)).to.eventually.rejected;
  });
});
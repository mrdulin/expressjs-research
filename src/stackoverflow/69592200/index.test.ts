import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiaspromised from 'chai-as-promised';
import proxyquire from 'proxyquire';

chai.use(chaiaspromised);

describe('69592200', () => {
  it('should execute statement correctly', async () => {
    const rdsDataService = {
      executeStatement: sinon.stub().returnsThis(),
      promise: sinon.stub().resolves(),
    };
    const AWSStub = {
      RDSDataService: sinon.stub().returns(rdsDataService),
      config: {
        update: sinon.stub(),
      },
    };
    const dbops = proxyquire('./', {
      'aws-sdk': AWSStub,
    }).default;
    await dbops.addID('xyz', ['101', '102'], 'xyz');
    sinon.assert.calledWithExactly(AWSStub.config.update, { region: 'us-west-2' });
    sinon.assert.calledOnce(rdsDataService.executeStatement);
    sinon.assert.calledOnce(rdsDataService.promise);
  });

  it('should throw error if execute query statement fail', async () => {
    const error = new Error('network');
    const rdsDataService = {
      executeStatement: sinon.stub().returnsThis(),
      promise: sinon.stub().rejects(error),
    };
    const AWSStub = {
      RDSDataService: sinon.stub().returns(rdsDataService),
      config: {
        update: sinon.stub(),
      },
    };
    const dbops = proxyquire('./', {
      'aws-sdk': AWSStub,
    }).default;
    await expect(dbops.addID('xyz', ['101', '102'], 'xyz')).to.eventually.rejectedWith(
      'Unable to perform update for given users',
    );
  });
});

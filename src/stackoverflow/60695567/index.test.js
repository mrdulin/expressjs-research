const { getSecret } = require('./');
const ssm = require('./aws-client');
const sinon = require('sinon');
const { expect } = require('chai');

describe('60695567', () => {
  it('should get secret', async () => {
    const promiseStub = sinon.stub().resolves({ Parameter: { Value: '123' } });
    sinon.stub(ssm, 'getParameter').callsFake(() => ({
      promise: promiseStub,
    }));
    const actual = await getSecret('token');
    expect(actual).to.be.eq('123');
    sinon.assert.calledWithExactly(ssm.getParameter, { Name: 'token', WithDecryption: true });
    sinon.assert.calledOnce(promiseStub);
  });
});

import { main } from './';
import { object } from './obj';
import sinon from 'sinon';
import { expect } from 'chai';

describe('64795845', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should return data', async () => {
    const promiseStub = sinon.stub(object, 'promise').resolves('fake data');
    const firtCallStub = sinon.stub(object, 'firstCall').returnsThis();
    const actual = await main();
    expect(actual).to.be.equal('fake data');
    sinon.assert.calledWithExactly(firtCallStub, {});
    sinon.assert.calledOnce(promiseStub);
  });
});

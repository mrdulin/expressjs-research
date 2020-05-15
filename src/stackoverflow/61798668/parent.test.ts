import { expect } from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

describe('61798668', () => {
  it('should pass', () => {
    const submoduleStub = {
      submethod: sinon.stub().returns('stubbed data'),
    };
    const SubmoduleStub = sinon.stub().returns(submoduleStub);
    const Parent = proxyquire('./parent', {
      './sub-module': {
        default: SubmoduleStub,
      },
    }).default;
    const parent = new Parent();
    const actual = parent.parentmethod();
    expect(actual).to.be.eq('stubbed data');
    sinon.assert.calledOnce(SubmoduleStub);
    sinon.assert.calledOnce(submoduleStub.submethod);
  });
});

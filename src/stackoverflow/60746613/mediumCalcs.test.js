const sinon = require('sinon');
const expect = require('chai').expect;
const proxyquire = require('proxyquire');

describe('sample test', () => {
  it('average', () => {
    const simpleCalcsStub = {
      sum: sinon.stub().returns(3),
    };
    const simpleCalcs = sinon.stub().callsFake(() => simpleCalcsStub);
    const mediumCalcs = proxyquire('./mediumCalcs.js', {
      './simpleCalcs': simpleCalcs,
    })();
    const result = mediumCalcs.avg([1, 2, 3]);
    expect(result).to.be.equal(1);
    sinon.assert.calledOnce(simpleCalcs);
    sinon.assert.calledWithExactly(simpleCalcsStub.sum, [1, 2, 3]);
  });
});

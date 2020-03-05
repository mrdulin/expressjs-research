import sinon from 'sinon';
import { expect } from 'chai';

describe('56876050', () => {
  it('should pass', () => {
    const a = sinon
      .stub()
      .withArgs('myArg1')
      .returns(15);
    const actual = a();
    expect(actual).to.eql(15);
    sinon.assert.calledOnce(a);
  });
});

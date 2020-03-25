import { MyClass } from './';
import sinon from 'sinon';
import { expect } from 'chai';

describe('60838564', () => {
  it('should return instance', () => {
    sinon.stub(MyClass.prototype, 'myMethod').returnsThis();
    const myClass = new MyClass();
    const actual = myClass.myMethod();
    expect(actual).to.be.instanceOf(MyClass);
    expect(actual).to.be.equal(myClass);
  });
});

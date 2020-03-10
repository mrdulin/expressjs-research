import { MyClass } from './';
import sinon from 'sinon';

describe('60605728', () => {
  it('should spy', () => {
    const sandbox = sinon.createSandbox();
    const classInstance = new MyClass();
    const spy = sandbox.spy(classInstance, 'method');
    classInstance.method('project', 'service');
    sinon.assert.calledOnce(spy);
  });
});

import { Test } from './test';
import sinon from 'sinon';

describe('66321639', () => {
  it('should pass', () => {
    const someData = [{}, {}];
    sinon.stub(Test.prototype, 'fetch').resolves(someData);
  });
});

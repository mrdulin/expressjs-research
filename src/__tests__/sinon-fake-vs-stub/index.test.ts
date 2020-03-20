import sinon from 'sinon';
import { main } from './';

describe('sinon fake vs stub', () => {
  it('should pass when using a sinon stub', () => {
    const callback = sinon.stub().returns('value');
    const actual = main(callback);
    sinon.assert.match(actual, 'value');
    sinon.assert.calledOnce(callback);
  });

  it('should pass when using a sinon fake', () => {
    const callback = sinon.fake.returns('value');
    const actual = main(callback);
    sinon.assert.match(actual, 'value');
    sinon.assert.calledOnce(callback);
  });
});

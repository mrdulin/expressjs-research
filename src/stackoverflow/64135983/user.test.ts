import { UserClass } from './user';
import sinon from 'sinon';
import { StaticClass } from './static';

describe('64135983', () => {
  it('should pass', () => {
    const staticMethodStub = sinon.stub(StaticClass, 'staticMethod');
    new UserClass().method();
    sinon.assert.calledOnce(staticMethodStub);
    staticMethodStub.restore();
  });
});

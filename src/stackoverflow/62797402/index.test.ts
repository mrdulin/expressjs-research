import { main } from './';
import sinon from 'sinon';
import { AuthenticationContext } from './AuthenticationContext';

describe('62797402', () => {
  let sandbox;
  before(() => {
    sandbox = sinon.createSandbox();
  });
  it('should pass', () => {
    const fkFn = () => console.log('fake implementation');
    let stub = sandbox.stub(AuthenticationContext.prototype, 'acquireTokenWithUsernamePassword').callsFake(fkFn);
    main();
    sinon.assert.calledOnce(stub);
  });
});

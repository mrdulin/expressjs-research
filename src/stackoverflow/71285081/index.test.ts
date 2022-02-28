import rewire from 'rewire';
import sinon from 'sinon';

describe('71285081', () => {
  it('should pass', () => {
    const mod = rewire('./');
    const saySecretStub = sinon.stub().returns('Ok');
    mod.__set__('saySecret', saySecretStub);
    const actual = mod.outer();
    sinon.assert.match(actual, 'Ok');
    sinon.assert.calledOnce(saySecretStub);
  });
});

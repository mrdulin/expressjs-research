import { Foo } from './foo';
import sinon from 'sinon';

describe('72721041', () => {
  it('should pass', async () => {
    const fakeToken = '12345';
    const env = 'prod';
    const foo = new Foo(fakeToken, env);
    const response = {
      json: sinon.stub().resolves({ results: ['a', 'b'] }),
    };
    (global as any).fetch = sinon.stub().resolves(response);
    const actual = await foo.getInclusiveData();
    sinon.assert.match(actual, ['a', 'b']);
  });
});

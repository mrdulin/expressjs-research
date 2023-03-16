import sinon from 'sinon';
import someService from './a-location';

describe('description', () => {
  it('more description', async () => {
    sinon.stub(someService, 'getVal').returns('my-val');
    const AnObject = (await import('./some-file')).default;
    AnObject.someMethod();
  });
});

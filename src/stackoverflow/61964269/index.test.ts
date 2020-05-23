import * as funcs from './';
import sinon from 'sinon';

describe('61964269', () => {
  it('should pass', async () => {
    const spy = sinon.stub(funcs, 'func1');
    const queue = 'test-queue';
    const topic = 'test-topic';
    const data = { field1: 'value1', field2: 'value2' };

    await funcs.func2(queue, data);
    sinon.assert.calledWithExactly(spy, 'key', 'secret', 'region', 'test-queue', {
      field1: 'value1',
      field2: 'value2',
    });
  });
});

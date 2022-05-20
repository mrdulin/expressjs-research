import { getData } from './helper';
import sinon from 'sinon';
import STATIC_DATA from './static-data';

describe('72312542', () => {
  it('should return bar when include is false', () => {
    STATIC_DATA['someOtherKey'] = { include: false };
    const isBar = getData('someOtherKey');
    sinon.assert.match(isBar, 'bar');
    delete STATIC_DATA['someOtherKey'];
  });

  it('should return foo when include is true', () => {
    STATIC_DATA['someKey'] = { include: true };
    const isFoo = getData('someKey');
    sinon.assert.match(isFoo, 'foo');
    delete STATIC_DATA['someKey'];
  });
});

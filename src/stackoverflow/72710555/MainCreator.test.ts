import sinon from 'sinon';
import { MainCreator } from './MainCreator';
import { HeaderCreator } from './Headers';

describe('72710555', () => {
  it('should pass', async () => {
    sinon.stub(HeaderCreator.prototype, 'getHeaderCreds').resolves(['a', 'b']);
    const mainCreator = new MainCreator();
    const actual = await mainCreator.makeIndents();
    sinon.assert.match(actual, ['a', 'b']);
  });
});

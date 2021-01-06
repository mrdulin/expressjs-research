import { expect } from 'chai';
import sinon from 'sinon';
import { file } from './file';

describe('65594632', () => {
  it('It should not throw error and return simulated data string', async function () {
    let mockedData = 'This is\na simultated response\nfrom the socket';

    const sConn = {
      on: sinon.stub().callsFake(async (event, callback) => {
        await callback(mockedData);
      }),
    };

    const result = await file.readData(sConn);
    sinon.assert.callCount(sConn.on, 1);
    expect(result).to.be.equal(mockedData);
  });
});

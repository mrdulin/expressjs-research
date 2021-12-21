import { expect } from 'chai';
import sinon from 'sinon';
import fs from 'fs';
import { writeToFile } from './utils';

describe('70283615', () => {
  it('Write to file', async () => {
    const append = sinon.stub(fs, 'appendFile');
    const write = sinon.stub(fs, 'writeFile');

    await writeToFile('path', 'buffer', false);
    sinon.assert.calledWith(write, 'path', 'buffer', sinon.match.func);
    expect(append.callCount).to.equal(0);
    expect(write.callCount).to.equal(1);

    await writeToFile('path', 'buffer', true);
    expect(append.callCount).to.equal(1);
    expect(write.callCount).to.equal(1);
  });
});

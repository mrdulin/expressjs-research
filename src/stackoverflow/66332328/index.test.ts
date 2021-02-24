// @ts-nocheck
import { Tailer } from './';
import fs from 'fs';
import sinon from 'sinon';
import { expect } from 'chai';

describe('66332328', () => {
  it('should pass', () => {
    const openStub = sinon.stub(fs, 'open').callsFake((filepath, flags, callback) => {
      callback(null, 1);
    });
    const readStub = sinon.stub(fs, 'read').callsFake((fd, buffer, offset, length, position, callback) => {
      callback && callback(null, 100, Buffer.from('teresa teng\nbest singer'));
    });

    const tailer = new Tailer('./test.text');
    tailer.setupFile(50);
    expect(tailer.lastLines).to.be.deep.equal(['teresa teng', 'best singer']);
    sinon.assert.calledWithExactly(openStub, './test.text', 'r', sinon.match.func);
    sinon.assert.calledWithExactly(readStub, 1, Buffer.alloc(50), 0, 50, 50, sinon.match.func);
  });
});

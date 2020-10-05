import { buildToSend } from './';
import sinon from 'sinon';
import { expect } from 'chai';

describe('60936845', () => {
  it('should pass', () => {
    const date = 1483228800000;
    const clock = sinon.useFakeTimers(date);
    const input = { name: 'name' };
    expect(buildToSend(input)).to.deep.equal({ msg: { application: 'name', date: new Date(date) } });
    clock.restore();
  });
});

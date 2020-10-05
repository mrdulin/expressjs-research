import { expect } from 'chai';

describe('62430596', () => {
  it('should pass', () => {
    const scenar = { conditions: {} };
    expect(scenar.hasOwnProperty('conditions')).to.true;
    expect(scenar).to.have.key('conditions');
  });
});

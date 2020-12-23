import { expect } from 'chai';

describe('65413897', () => {
  it('catches when first row is a single-column', function() {
    const errors = [new Error('Missing required column/s action'), new Error('The column label "Table 1" is invalid')];

    expect(errors).to.have.deep.members([
      new Error('Missing required column/s action'),
      new Error('The column label "Table 1" is invalid'),
    ]);
  });
});

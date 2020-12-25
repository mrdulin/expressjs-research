const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');

chai.use(deepEqualInAnyOrder);

const { expect } = chai;

describe('59308311', () => {
  it('should pass', () => {
    const actualResult = [
      {
        start: '30',
        end: '50',
        locations: ['loc1', 'loc2'],
      },
      {
        start: '20',
        end: '40',
        locations: ['loc3', 'loc4'],
      },
    ];

    const expectedResult = [
      {
        start: '20',
        end: '40',
        locations: ['loc4', 'loc3'],
      },
      {
        start: '30',
        end: '50',
        locations: ['loc2', 'loc1'],
      },
    ];

    expect(actualResult).to.deep.equalInAnyOrder(expectedResult);
  });
});

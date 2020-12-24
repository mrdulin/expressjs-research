const chai = require('chai');
const chaiJsonPattern = require('chai-json-pattern').default;
chai.use(chaiJsonPattern);
const { expect } = chai;

describe('64715893', () => {
  it('should pass', () => {
    const object = {
      recipe: {
        _id: Math.random().toString(),
        name: 'thing',
        usedIngredients: [Math.random() + 'whatever'],
      },
    };
    expect(object).to.matchPattern(`{
      "recipe": {
        "_id": String,
        "name": "thing",
        "usedIngredients": Array,
      },
    }`);
  });
});

const chai = require('chai');
const chaiJsonPattern = require('chai-json-pattern').default;
chai.use(chaiJsonPattern);

const { expect } = chai;

describe('69158740', () => {
  it('should pass', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2, c: null };
    expect(obj1).to.matchPattern(`{
      "a": 1,
      "b": 2,
      "c": null OR 3
    }`);
    expect(obj2).to.matchPattern(`{
      "a": 1,
      "b": 2,
      "c": null OR 3
    }`);
  });
});

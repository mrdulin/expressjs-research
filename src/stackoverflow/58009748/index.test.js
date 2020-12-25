const { expect } = require('chai');

let messages = [];

before((done) => {
  // simulate read csv operator
  setTimeout(() => {
    messages.push(...[1, 2, 3]);
    console.log(`[${new Date().toISOString()}] before`, messages);
    done();
  }, 1000);
});

describe('Should return correct responses', () => {
  console.log(`[${new Date().toISOString()}] after`, messages);

  it('dummy', () => {
    console.log(`[${new Date().toISOString()}] run dummy test case`);
    expect(messages).to.be.deep.eq([1, 2, 3]);
  });
});

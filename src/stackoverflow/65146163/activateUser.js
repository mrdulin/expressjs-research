const { expect } = require('chai');

describe('Activate User', () => {
  it('should activate user', (done) => {
    setTimeout(() => {
      expect(global.activationCode).to.be.eql('success');
      console.log(new Date().toISOString());
      done();
    }, 1000);
  });
});

global.activationCode = undefined;

describe('Create User', () => {
  it('should create user and get the activation code', (done) => {
    setTimeout(() => {
      global.activationCode = 'success';
      console.log(new Date().toISOString());
      done();
    }, 3000);
  });
});

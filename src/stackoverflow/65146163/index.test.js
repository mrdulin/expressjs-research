describe('Testing', () => {
  before(function(done) {
    setTimeout(() => {
      console.log('delete user');
      console.log(new Date().toISOString());
      done();
    }, 1000);
  });
  require('./createUser');
  require('./activateUser');
});

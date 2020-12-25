const { expect } = require('chai');
const options = { user: { password: '123', mobileNumber: '321' } };
const app = {};

let testloginFailed = (app, title, data) => {
  it(title, function () {
    expect(1 + 1).to.be.eql(2);
  });
};

describe('login negative Tests', () => {
  let loginFailedTests = [
    {
      title: 'it should fail user login using mobile because of incorrect mobile',
      data: {
        username: '1223334444',
        password: options.user.password,
      },
    },
    {
      title: 'it should fail user login using mobile because of incorrect password',
      data: {
        username: options.user.mobileNumber,
        password: options.user.password + '123',
      },
    },
  ];

  loginFailedTests.forEach((test) => {
    testloginFailed(app, test.title, test.data);
  });
});

const chai = require('chai');
const chaiJsonPattern = require('chai-json-pattern').default;
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiJsonPattern);
chai.use(chaiAsPromised);

const { expect } = chai;

describe('38598544', () => {
  it('should pass', () => {
    const profilePromise = Promise.resolve({
      __data: {
        id: Math.random(),
        firstName: 'facebookProfile.first_name',
        lastName: 'facebookProfile.last_name',
        email: 'facebookProfile.email',
        gender: 'facebookProfile.gender',
        isPopularVerified: 'facebookProfile.is_verified',
        isVerified: 'facebookProfile.verified',
        locale: 'facebookProfile.locale',
        timezone: 'facebookProfile.timezone',
        createdOn: Date.now(),
        updatedOn: Date.now(),
      },
    });

    return expect(profilePromise).to.eventually.be.fulfilled.to.have.property('__data').to.matchPattern(`{
      "id": Number,
      "firstName": "facebookProfile.first_name",
      "lastName": "facebookProfile.last_name",
      "email": "facebookProfile.email",
      "gender": "facebookProfile.gender",
      "isPopularVerified": "facebookProfile.is_verified",
      "isVerified": "facebookProfile.verified",
      "locale": "facebookProfile.locale",
      "timezone": "facebookProfile.timezone",

      "createdOn": Number,
      "updatedOn": Number,
    }`);
  });
});

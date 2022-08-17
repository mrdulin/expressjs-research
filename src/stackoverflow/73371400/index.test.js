const chai = require('chai');
const chaiJsonPattern = require('chai-json-pattern').default;

chai.use(chaiJsonPattern);
const { expect } = chai;

describe('73371400', () => {
  it('should pass', () => {
    const response = {
      data: {
        bookingid: 4693,
        booking: {
          firstname: 'firstname',
          lastname: 'lastname',
          totalprice: 9999,
          depositpaid: false,
          bookingdates: {
            checkin: '2018-01-01',
            checkout: '2019-01-01',
          },
          additionalneeds: 'additional needs',
        },
      },
    };
    expect(response.data).to.matchPattern(`{
      "bookingid": Number,
      "booking": {
        "firstname": "firstname",
        "lastname": "lastname",
        "totalprice": 9999,
        "depositpaid": false,
        "bookingdates": {
          "checkin": "2018-01-01",
          "checkout": "2019-01-01"
        },
        "additionalneeds": "additional needs"
      }
    }`);
  });
});

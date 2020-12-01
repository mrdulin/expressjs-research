const theFile = require('./');
const moment = require('moment');
const sinon = require('sinon');

describe('65081463', () => {
  it('should pass', () => {
    sinon.stub(theFile, 'b').callsFake(function() {
      console.log('Calling mocked sinon ');
      return moment('2021-10-10', 'YYYY-MM-DD')
        .utc()
        .startOf('day');
    });
    const actual = theFile.a();
    console.log(actual);
  });
});

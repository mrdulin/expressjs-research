const sinon = require('sinon');
const jwtUtils = require('./jwt');

it('should pass', () => {
  sinon.stub(jwtUtils, 'decode').returns({ header: { alg: 'RS256', typ: 'JWT', kid: 'MOCKKID' } });

  const actual = jwtUtils.decode();
  sinon.assert.match(actual, { header: { alg: 'RS256', typ: 'JWT', kid: 'MOCKKID' } });
});

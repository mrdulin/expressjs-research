import sinon from 'sinon';
import jwt, { Secret } from 'jsonwebtoken';


describe('76392073', () => {
  it('should pass', () => {
    (sinon.stub(jwt, 'verify') as unknown as sinon.SinonStub<[string, Secret], string>).returns('valid')
    sinon.assert.match(jwt.verify('token', 'shhh'), 'valid')
  })
})
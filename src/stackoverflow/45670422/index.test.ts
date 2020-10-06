import sinon from 'sinon'
import { assert, expect } from 'chai';

// npm t -- --bail index.test.ts
// Fail the test manually, stop executing other tests.
describe('45670422', () => {
  it('should pass', () => {
    const errorStub = sinon.stub(console, 'error').callsFake((msg) => {
      console.log(`[[ERROR]] MSG: ${msg}`);
      assert.fail(`actual`, `expected`, `message`);
      throw new Error('we do not want to see this error');
    }) 
    console.error('network');
  });
  it('should equal 2', () => {
    expect(1+1).to.be.eq(2)
  });
});
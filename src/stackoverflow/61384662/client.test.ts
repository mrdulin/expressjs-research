import { Client } from './client';
import { expect } from 'chai';
import requestPromise from 'request-promise-native';
import sinon from 'sinon';

describe('61384662', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should pass', async () => {
    const client = new Client();
    const mResponse = {};
    const postStub = sinon.stub(requestPromise, 'post').resolves(mResponse);
    const actual = await client.post({ uri: 'http://localhost:3000/api', method: 'GET' });
    expect(actual).to.be.equal(mResponse);
    sinon.assert.calledWithExactly(postStub, { uri: 'http://localhost:3000/api', method: 'GET' });
  });
});

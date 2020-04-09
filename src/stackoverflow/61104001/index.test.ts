import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe('61104001', () => {
  it('should pass', () => {
    const value = 'some value';
    const indefinite = 'indefinite';
    const formatArticleStub = sinon.stub().returns('fake data');
    const format = proxyquire('./', {
      './article': { default: formatArticleStub },
    }).default;
    const actual = format(value, indefinite);
    sinon.assert.match(actual, 'fake data');
    sinon.assert.calledWithExactly(formatArticleStub, value);
  });
  // you can do the rest
});

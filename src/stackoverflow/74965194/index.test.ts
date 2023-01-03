import sinon from 'sinon';

describe('74965194', () => {
  it('should pass', () => {
    const stub = sinon.stub().withArgs('arg1').returns('val1');
    sinon.assert.match(stub('arg1'), 'val1');
  });

  it('should pass too', () => {
    const fake = sinon.fake((arg) => {
      if (arg === 'arg1') return 'val1';
    });
    sinon.assert.match(fake('arg1'), 'val1');
  });
});

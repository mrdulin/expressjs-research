import sinon from 'sinon';
import proxyquire from 'proxyquire';
import { expect } from 'chai';

describe('61716637', () => {
  it('should pass', () => {
    const animalInstanceStub = {
      getAnimalSound: sinon.stub().returns('stubbed value'),
    };
    const AnimalStub = sinon.stub().returns(animalInstanceStub);
    const getAnimalSound = proxyquire('./zoo', {
      './animal': { default: AnimalStub },
    }).default;
    const actual = getAnimalSound('bird');
    expect(actual).to.be.equal('stubbed value');
    sinon.assert.calledWith(AnimalStub, 'bird');
    sinon.assert.calledWith(animalInstanceStub.getAnimalSound, animalInstanceStub);
  });
});

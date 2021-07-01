import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe('68197110', () => {
  it('should pass', () => {
    const carStub = { validate: sinon.stub() };
    const CreateCarStub = sinon.stub().returns(carStub);
    const Vehicle = proxyquire('./vehicle', {
      './builders/carBuilder': {
        CreateCar: CreateCarStub,
      },
    }).default;
    const sut = new Vehicle();
    sut.createBmw('5 series');
    sinon.assert.calledWithExactly(carStub.validate, '5 series');
  });
});

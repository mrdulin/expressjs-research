const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('66751571', () => {
  it('should pass', () => {
    const classBInstanceStub = {
      getInfo: sinon.stub().returns('teresa teng'),
    };
    const classCInstanceStub = {
      processedData: sinon.stub(),
    };
    const ClassBStub = sinon.stub().returns(classBInstanceStub);
    const ClassCStub = sinon.stub().returns(classCInstanceStub);
    const { ClassA } = proxyquire('./classA', {
      './classB': { ClassB: ClassBStub },
      './classC': { ClassC: ClassCStub },
    });
    const clsA = new ClassA();
    clsA.doSomething();
    sinon.assert.calledOnce(classBInstanceStub.getInfo);
    sinon.assert.calledWithExactly(classCInstanceStub.processedData, 'teresa teng');
  });
});

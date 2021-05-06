import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe('67413500', () => {
  it('should pass', async () => {
    const myDecoratorStub = sinon.stub().callsFake(() => {
      return function check(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const newDescriptor = Object.assign({}, descriptor);
        console.log('fake implementation, skip heavy and side-effect work');
        return newDescriptor;
      };
    });
    const { MyClass } = proxyquire('./', {
      './decorator/MyDecorator': {
        myDecorator: myDecoratorStub,
      },
    });
    const cls = new MyClass();
    const actual = await cls.createItem();
    sinon.assert.match(actual, true);
  });
});

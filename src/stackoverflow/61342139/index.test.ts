import { MyClass } from './';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

describe('61342139', () => {
  it('should pass', async () => {
    const myClass = new MyClass();
    try {
      await myClass.get('test');
    } catch (error) {
      expect(error).to.be.instanceOf(Error);
      expect(error.message).to.be.equal("name is eql 'test'");
    }
  });

  it('should pass too', async () => {
    const myClass = new MyClass();
    await expect(myClass.get('test')).to.be.rejectedWith("name is eql 'test'");
  });
});

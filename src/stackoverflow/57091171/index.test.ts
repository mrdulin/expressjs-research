import { ClassToTest } from './';
import sinon from 'sinon';
import { expect } from 'chai';

describe('57091171', () => {
  afterEach(() => {
    sinon.restore();
  });
  describe('#constructor', () => {
    it('should set person', () => {
      const setPersonStub = sinon.stub(ClassToTest.prototype, 'setPerson');
      const person = { firstName: 'sinon' };
      new ClassToTest(person);
      sinon.assert.calledWithExactly(setPersonStub, person);
    });
  });
  describe('#setPerson', () => {
    it('should set person', () => {
      const stub = sinon.stub(ClassToTest.prototype, 'setPerson').returns();
      const person = { firstName: 'sinon' };
      const ins = new ClassToTest(person);
      stub.restore();
      ins.setPerson(person);
      expect(ins.person).to.deep.equal(person);
    });
    it('should handle error if firstName is not existed', () => {
      const stub = sinon.stub(ClassToTest.prototype, 'setPerson').returns();
      const person = {};
      const ins = new ClassToTest(person);
      stub.restore();
      expect(() => ins.setPerson(person)).to.throw('Person has to have first name.');
    });
  });
});

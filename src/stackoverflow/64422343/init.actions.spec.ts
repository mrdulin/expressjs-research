import sinon from 'sinon';
import * as questions from './questions';
import { ModuleAnswer, ModuleValue } from './choice';
import { initActions } from './init.actions';
import { expect } from 'chai';

describe('src/actions/init.actions', () => {
  let sandbox: sinon.SinonSandbox;
  let moduleQuestionStub: sinon.SinonStub;
  const mockAnswer: ModuleAnswer = {
    name: ModuleValue.CORE,
  };

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should always call mandatory questions', async () => {
    moduleQuestionStub = sandbox.stub(questions, 'moduleQuestion').resolves(mockAnswer);
    await initActions();
    // sinon.assert.calledOnce(moduleQuestionStub);
    expect(moduleQuestionStub.calledOnce).to.be.true;
  });
});

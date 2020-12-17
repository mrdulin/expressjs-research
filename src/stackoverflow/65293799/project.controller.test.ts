import sinon from 'sinon';
import chai, { expect } from 'chai';
import proxyquire from 'proxyquire';
import { Project } from './project.entity';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

const mockProject = {
  ID: 'insert-id-here',
  name: 'name',
};

describe('Testing findOneProject', () => {
  let sandbox: sinon.SinonSandbox;
  before(() => {
    sandbox = sinon.createSandbox();
  });
  it('Should return the same project', async () => {
    const typeormStub = {
      getManager: sandbox.stub().returnsThis(),
      getRepository: sandbox.stub().returnsThis(),
      find: sandbox.stub().resolves([mockProject]),
    };
    const { findOneProject } = proxyquire('./project.controller', {
      typeorm: typeormStub,
    });

    const project = await findOneProject({ id: 1 });
    sandbox.assert.calledOnce(typeormStub.getManager);
    sandbox.assert.calledWithExactly(typeormStub.getRepository, Project);
    sandbox.assert.calledWithExactly(typeormStub.find, { where: { id: 1 } });
    expect(project).to.be.eq(mockProject);
  });

  it('should throw error if found more than one project', async () => {
    const typeormStub = {
      getManager: sandbox.stub().returnsThis(),
      getRepository: sandbox.stub().returnsThis(),
      find: sandbox.stub().resolves([{ name: 'a' }, { name: 'b' }]),
    };
    const { findOneProject } = proxyquire('./project.controller', {
      typeorm: typeormStub,
    });

    await expect(findOneProject({ id: 1 })).to.be.rejectedWith('Found more than one project');
    sandbox.assert.calledOnce(typeormStub.getManager);
    sandbox.assert.calledWithExactly(typeormStub.getRepository, Project);
    sandbox.assert.calledWithExactly(typeormStub.find, { where: { id: 1 } });
  });

  it('should throw error if find project error', async () => {
    const typeormStub = {
      getManager: sandbox.stub().returnsThis(),
      getRepository: sandbox.stub().returnsThis(),
      find: sandbox.stub().rejects(new Error('timeout')),
    };
    const { findOneProject } = proxyquire('./project.controller', {
      typeorm: typeormStub,
    });

    await expect(findOneProject({ id: 1 })).to.be.rejectedWith('Unable to find project: timeout');
    sandbox.assert.calledOnce(typeormStub.getManager);
    sandbox.assert.calledWithExactly(typeormStub.getRepository, Project);
    sandbox.assert.calledWithExactly(typeormStub.find, { where: { id: 1 } });
  });
});

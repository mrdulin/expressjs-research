import sinon from 'sinon';
import { Repo } from './repo';

describe('76734307', () => {
	it('should pass', async () => {
		const PipelinesStub = {
			all: sinon.stub().resolves(['a', 'b', 'c']),
		};
		const repoClientInstanceStub = {
			Pipelines: PipelinesStub,
		};

		const RepoClientClassStub = sinon.stub().returns(repoClientInstanceStub);
		const repo = new Repo('127.0.0.1', RepoClientClassStub);
		const actual = await repo.getLatestProjectPipeline();
		sinon.assert.match(actual, 'a');
	});
});

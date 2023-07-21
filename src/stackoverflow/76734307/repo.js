class Repo {
	api;
	constructor(host, RepoClient) {
		const api = new RepoClient({
			host: host,
		});
		this.api = api;
	}

	async getLatestProjectPipeline(projectId) {
		const projectPipelines = await this.api.Pipelines.all(projectId);
		if (projectPipelines.length == 0) {
			return null;
		}
		return projectPipelines[0];
	}
}

export { Repo };

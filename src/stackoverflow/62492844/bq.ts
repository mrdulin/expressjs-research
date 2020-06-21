const { BigQuery } = require('@google-cloud/bigquery');

export default class BQ {
  bigquery;

  constructor(projectId, keyFilename) {
    const options = {
      projectId,
      keyFilename,
      autoRetry: true,
    };

    this.bigquery = new BigQuery(options);
  }

  async query(query) {
    const options = {
      query,
      location: 'us',
    };
    const [job] = await this.bigquery.createQueryJob(options);
    const [rows] = await job.getQueryResults();
    return rows;
  }
}

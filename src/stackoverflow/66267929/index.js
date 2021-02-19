const { BigQuery } = require('@google-cloud/bigquery');
const bigqueryClient = new BigQuery();

const dataset = 'dataset_name';
const table = 'table_name';

exports.sendtobigquery = (event, context) => {
  const pubsubMessage = Buffer.from(event.data, 'base64').toString();
  BigQueryInsert(pubsubMessage, dataset, table);
};

async function BigQueryInsert(pubsubMessage, dataset, table) {
  const rows = [{ field1: pubsubMessage }];
  await bigqueryClient.dataset(dataset).table(table).insert(rows);
}

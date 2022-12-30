import { Client } from '@elastic/elasticsearch';
const esClient = new Client({ node: 'http://localhost:9200' });
esClient.indices.stats({ index: 'a' }).then(console.log);

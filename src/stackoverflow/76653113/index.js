const { Client } = require('@elastic/elasticsearch');

const client = new Client({
	node: 'http://localhost:9200',
});

export function main() {
	return client.nodes.stats();
}

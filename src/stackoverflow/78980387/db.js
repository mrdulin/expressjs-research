const mongodb = require('mongodb');

class DBClient {
	constructor() {
		const host = process.env.DB_HOST || 'localhost';
		const port = process.env.DB_PORT || 27017;
		const database = process.env.DB_DATABASE || 'files_manager';

		const dbUri = `mongodb://${host}:${port}/${database}`;
		this.client = new mongodb.MongoClient(dbUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		this.isClientConnected = false;
		this.client.connect((err) => {
			if (err) {
				console.error('Error encounted while connecting to MongoDB', err);
			} else {
				this.isClientConnected = true;
				console.log('Connected to MongoDB');
			}
		});
	}

	isAlive() {
		return this.isClientConnected;
	}
}

const dbClient = new DBClient();

module.exports = dbClient;

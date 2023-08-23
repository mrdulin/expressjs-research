import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, './01-get-started/index.html'));
});

app.post('/beacon/text', express.text(), (req, res) => {
	console.log(req.url, 'req.body: ', req.body, typeof req.body);
	res.sendStatus(204);
});

app.post('/beacon/blob', express.json(), (req, res) => {
	console.log(req.url, 'req.body: ', req.body, typeof req.body);
	res.sendStatus(204);
});

app.listen(3000, () => console.log('server is listening on port 3000'));

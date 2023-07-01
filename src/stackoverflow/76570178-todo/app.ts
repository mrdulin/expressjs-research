import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, './index.html'));
});

app.post('/login', (req, res) => {
	res.json('Login successfully');
});

app.listen(3000, () => {
	console.log('server started at port 3000');
});

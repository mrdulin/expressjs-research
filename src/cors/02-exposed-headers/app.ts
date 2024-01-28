import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(
	cors({
		exposedHeaders: ['Content-Length', 'Content-Type', 'Date'],
	}),
);

app.post('/', (req, res) => {
	console.log('test');
	res.status(200).json({ result: [1, 2] });
});

app.listen(5000, () => console.log('server listen at http://localhost:5000'));

import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/books', (req, res) => {
	console.log('req.body: ', req.body);
	res.json({ data: [1, 2, 3] });
});

app.listen(3000, () => console.log('server started at port 3000'));

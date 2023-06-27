import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.cookie('state', 'ok', { httpOnly: true });
	res.sendStatus(200);
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});

// express()
// 	.use(vhost('api.*', app))
// 	.listen(8080, () => {
// 		console.log('Connected and listening on port 3000');
// 	});

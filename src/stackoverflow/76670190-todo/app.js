const util = require('util');
const express = require('express');
const app = express();
const port = 3000;

const heavyWork = () => {
	let arr = [];
	for (let index = 0; index < 300000 * 10; index++) {
		arr.push([{ index }]);
	}
	arr.map((a) => JSON.parse(JSON.stringify(a)));
};

app.get('/map', async (req, res) => {
	setTimeout(() => {
		heavyWork();
	}, 0);
	res.send('Hello map');
});

app.get('/something', (req, res) => {
	res.send('Hello something');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

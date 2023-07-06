const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

function getContents(tag) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ result: `content for tag: ${tag}` });
		}, 1000);
	});
}

app.get('/', async (req, res) => {
	const rows = [{ tag: 'a' }, { tag: 'b' }];
	const rowsWithContents = await Promise.all(
		rows.map((r) => getContents(r.tag).then((content) => ({ ...r, content }))),
	);
	console.log(rowsWithContents);
	res.render('index', { rows: rowsWithContents });
});

app.listen(3000, () => {
	console.log('Server listens on http://localhost:3000');
});

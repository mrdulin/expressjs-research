const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('list');
});

app.get('/list/:customListName', (req, res) => {
	res.render('list');
});

app.listen(3000, () => {
	console.log('Server running on http://127.0.0.1:3000');
});

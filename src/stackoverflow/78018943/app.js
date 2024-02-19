const express = require('express');
const adminfunctions = require('./adminfunctions');

const app = express();

app.get('/allcurrency/:id', (req, res) => {
	adminfunctions.getAllCurrency(req, function (data) {
		if (!data.error) {
			res.status(200).send(data);
		} else {
			res.status(500).send(data);
		}
	});
});

module.exports = app;
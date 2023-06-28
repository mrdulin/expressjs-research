const express = require('express');
const fs = require('fs');
const path = require('path');
const homeRoute = require('./routes/home');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));
app.use('/home', homeRoute);

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.listen(3000, () => {
	console.log('https server is running on port 3000');
});

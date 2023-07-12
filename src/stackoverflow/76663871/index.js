const express = require('express');

const server = express();
server.listen('3333', () => console.log('Server started on Port 3333'));

server.get('/', (req, res) => {
	res.send(req);
});

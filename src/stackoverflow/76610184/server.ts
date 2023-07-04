import cors from 'cors';
import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 4000;
app.set('port', PORT);

const server = http.createServer(app);
const io = new socketio.Server(server);

io.on('connection', (socket: socketio.Socket) => {
	console.log('Nuevo cliente conectado');
	socket.on('chat message', (msg: string) => {
		console.log('Mensaje recibido: ' + msg);
		io.emit('chat message', msg);
	});
	socket.on('disconnect', () => {
		console.log('Cliente desconectado');
	});
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('*', (_, res) => {
	res.status(404).send('Nothing here');
});

server.listen(PORT, () => {
	console.log(`Servidor iniciado en el puerto ${PORT}`);
});

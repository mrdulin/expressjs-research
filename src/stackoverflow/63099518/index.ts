import express from 'express';
import WebSocket from 'ws';
import http from 'http';
import path from 'path';
import faker from 'faker';

const app = express();
const port = 3000;
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
  console.log('establish websocket connection');
  ws.on('message', (message) => {
    console.log('received: %s', message);
  });
});

app.get('/client/:id', (req, res) => {
  res.sendFile(path.resolve(__dirname, `./public/client-${req.params.id}.html`));
});

app.get('/external-api', (req, res) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(faker.internet.email());
    }
  });
  res.sendStatus(200);
});

server.listen(port, () => console.log(`http server is listening on http://localhost:${port}`));

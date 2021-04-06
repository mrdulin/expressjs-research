import express from 'express';
import cookieParser from 'cookie-parser';
import authenticate from './mws/authenticate';

const server = express();

server.use(cookieParser());
server.get('/user/:id', authenticate, (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'teresa teng' });
});

export { server };

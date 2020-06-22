import express from 'express';
import { UserController } from './UserController';

const app = express();
const port = 3000;
app.get('/user/:id', UserController.get);

export { app };

import express from 'express';
import conversationRouter from './conversationRouter';
import userRouter from './userRouter';

const app = express();
const port = 3000;
app.use(express.json());

app.use('/api/conversation', conversationRouter);
app.use('/api/user', userRouter);

app.listen(3000, () => {
	console.log(`Server is running on ${port}`);
});

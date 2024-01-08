import express from 'express';

const conversationRouter = express.Router();

const validateToken = (req, res, next) => {
	console.log('validateToken');
	next();
};

conversationRouter.use(validateToken);
conversationRouter.post('/', (req, res) => {
	res.sendStatus(200);
});

export default conversationRouter;

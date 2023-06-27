import express from 'express';
import { check, validationResult } from 'express-validator';

const router = express.Router();
type ValidationResultError = {
	[string: string]: [string];
};

router.post(
	'/api/1.0/users',
	check('username').notEmpty().withMessage('Username cannot be null'),
	check('email').notEmpty().withMessage('E-mail cannot be null'),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			const validationErrors: ValidationResultError = {};
			errors.array().forEach((error) => {
				if (error.type === 'field') {
					validationErrors[error.path] = error.msg;
				}
			});
			return res.status(400).send({ validationErrors: validationErrors });
		}
		return res.send({ message: 'User Created' });
	},
);

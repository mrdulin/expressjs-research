import multer, { FileFilterCallback } from 'multer';
import { NextFunction, Request, Response } from 'express';

const storage = multer.memoryStorage();

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
	if (file.mimetype.startsWith('image')) {
		cb(null, true);
	} else {
		cb(new Error('Not an image! Please upload only images.'));
	}
};

const upload = multer({ storage, fileFilter });

const uploadRecipeImages = upload.array('images', 6);

export const resizeRecipeImages = async (req: Request, res: Response, next: NextFunction) => {
	console.log(req.files);
	if (!req.files) return next();
	res.sendStatus(200);
};

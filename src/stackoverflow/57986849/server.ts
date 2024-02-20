import express from 'express';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.resolve(__dirname, 'uploads'));
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, uniqueSuffix + path.extname(file.originalname));
	},
});
const upload = multer({ storage });

const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.post('/user/uploadpdf', upload.single('csv'), (req, res) => {
	res.status(200).json({ code: 0, message: 'success' });
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});

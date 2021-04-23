import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use('/public', express.static(path.resolve(__dirname, '../../../node_modules')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});
app.post('/user/update/:name', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));

import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const returnedData = await axios.post(`http://localhost:${port}/all-data`).then((response) => response.data);

  res.send(returnedData);
});

app.post('/all-data', (req, res) => {
  res.json({ name: 'teresa teng' });
});

app.listen(port, () => console.log(`HTTP server started at http://localhost:${port}`));

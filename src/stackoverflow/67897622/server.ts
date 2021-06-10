import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client.html'));
});

app.get('/api/getRegistrationApplication', (req, res) => {
  res.sendFile(path.resolve(__dirname, './matej-sefcik-GCRbVZydPT4-unsplash.jpg'));
});

app.listen(port, () => console.log(`HTTP server is listening on http://localhost:${port}`));

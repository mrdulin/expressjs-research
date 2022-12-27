import express from 'express';
import path from 'path';
import faker from 'faker';

const app = express();

app.get('/site', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

app.get('/api/users/swr', (req, res) => {
  const users = [
    { id: faker.random.uuid(), name: faker.name.findName() },
    { id: faker.random.uuid(), name: faker.name.findName() },
    { id: faker.random.uuid(), name: faker.name.findName() }
  ];
  console.log('users: ', users);
  res.setHeader('Cache-Control', 'max-age=5,stale-while-revalidate=10')
  res.json({ result: users })
})

app.get('/api/users', (req, res) => {
  const users = [
    { id: faker.random.uuid(), name: faker.name.findName() },
    { id: faker.random.uuid(), name: faker.name.findName() },
    { id: faker.random.uuid(), name: faker.name.findName() }
  ];
  res.setHeader('Cache-Control', 'max-age=5')
  res.json({ result: users })
})

const port = 3000;
app.listen(port, () => console.log(`HTTP server is listening on http://localhost:${port}`))


import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendStatus(200);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log('App has started');
  });
}

export { app, port };

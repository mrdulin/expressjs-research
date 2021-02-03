import express, { Response } from 'express';

const app = express();
const port = 3000;

function extendResponse(req, res: Response, next) {
  res.successful = (object?: any) => {
    return res.status(200).json({
      success: true,
      data: object,
    });
  };
  next();
}
app.use(extendResponse);
app.get('/', (req, res: Response) => {
  res.successful('ok');
});

app.listen(port, () => console.log(`HTTP server started at http://localhost:${port}`));

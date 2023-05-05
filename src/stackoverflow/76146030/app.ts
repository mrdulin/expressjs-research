import "express-async-errors"
import express from "express";
import { AppError, handleErrors } from "./errors";


const app = express();

app.use(express.json())
app.use('/movies', async (req, res) => {
  throw new AppError('test')
})
app.use(handleErrors);

app.listen(3000, () => console.log('Server started'))

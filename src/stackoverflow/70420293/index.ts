import { body, validationResult } from 'express-validator';
import express from 'express';
const app = express();

const convertedUrlIdValidationFactory = () =>
  body('convertedUrlId')
    .isLength({ min: 5, max: 6 })
    .withMessage({
      error: 'Invalid length',
      detail: {
        convertedUrlId: 'Invalid Length! Character length >=5 and <7 characters are allowed',
      },
    })
    .matches(/^[~A-Za-z0-9/./_/-]*$/)
    .withMessage({
      error: 'Invalid characters',
      detail: {
        convertedUrlId: 'Invalid characters! Only [A-Z],[a-z],[0-9], _ , - , . , ~ are allowed',
      },
    });

app.use(express.json());
app.post('/optional', convertedUrlIdValidationFactory().optional(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log(req.body);
  res.sendStatus(200);
});

app.post('/required', convertedUrlIdValidationFactory(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('server started at port 3000'));

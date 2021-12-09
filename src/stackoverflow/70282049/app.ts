import express from 'express';
import { body, validationResult } from 'express-validator';

function validation() {
  return [
    body('username')
      .isLength({ min: 4 })
      .withMessage('username must be at least 4 chars long')
      .isLength({ max: 12 })
      .withMessage(' username must be less than 12 chars long')
      .exists()
      .withMessage('username is required')
      .trim()
      .matches(/^[A-Za-z0-9\_]+$/)
      .withMessage('username must be alphanumeric only')
      .escape(),
    body('email').isEmail().normalizeEmail().withMessage('Invalid Email').exists(),
    body('password')
      .isLength({ min: 5 })
      .withMessage('password must be at least 5 chars long')
      .isLength({ max: 30 })
      .withMessage('password must be at max 30 chars long')
      .matches(/\d/)
      .withMessage('password must contain a number')
      .exists(),
  ];
}

const app = express();
const port = 3000;

app.use(express.json());
app.post('/register', validation(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.sendStatus(200);
});

app.listen(port, () => console.log('HTTP server started at port 3000'));

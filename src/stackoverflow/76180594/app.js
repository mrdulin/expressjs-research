const express = require('express')
const asyncHandler = require('express-async-handler');

const app = express();

const getContact = asyncHandler(async (req, res) => {
  const contact = undefined;

  if (!contact) {
    res.status(404);
    throw new Error('Contact not found');
  }

  res.status(200).json(contact);
});

const constants = {
  NOT_FOUND: 404
}
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

switch (statusCode) {
  case constants.NOT_FOUND:
    res.json({
      title: 'Not found',
      message: err.message,
      stackTrace: err.stack
    });
    break;
  default:
    console.log('No error, all is well !');
    break;
}
};

app.get('/', getContact)
app.use(errorHandler)

app.listen(3000, () => console.log('server started'))
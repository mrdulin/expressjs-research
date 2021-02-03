const express = require('express');

const app = express();
const port = 3000;
const itemController = {
  getItemById(id) {
    return { statusCode: 200, bodyResponse: 'test_item_' + id };
  },
};

app.get(
  '/:item_id',
  expressDecorator(async (req, res, next) => {
    const id = parseInt(req.params.item_id);
    return itemController.getItemById(id);
  }),
);

function expressDecorator(wrapped) {
  return async function (...args) {
    const [req, res, next] = args;
    try {
      const { statusCode, bodyResponse } = await wrapped.apply(this, args);
      res.status(statusCode).send(bodyResponse);
    } catch (error) {
      next(error);
    }
  };
}

app.listen(port, () => console.log(`HTTP server started at http://localhost:${port}`));

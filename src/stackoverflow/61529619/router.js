var express = require('express');
var router = express.Router();

var bookingsController = require('./controllers/bookings');

router
  .route('/')
  .get(bookingsController.bookings_get)
  .post(bookingsController.bookings_post);

router
  .route('/:id')
  .get(bookingsController.bookings_get_id)
  .put(bookingsController.bookings_put_id)
  .delete(bookingsController.bookings_delete_id);

module.exports = router;

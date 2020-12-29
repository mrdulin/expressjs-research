const { Router } = require('express');
const router = Router();
//retrieving contacts
router.get('/contacts', (req, res, next) => {
  res.send('retrieving the contact list');
});

//add contacts
router.post('/contact', (req, res, next) => {
  //logic
});

//delete contacts
router.delete('/contact/:id', (req, res, next) => {
  //logic
});

module.exports = router;

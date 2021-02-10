const admin = require('firebase-admin');
const app = admin.initializeApp();
const functions = require('firebase-functions');
const stripe = require('stripe')(functions.config().stripe.client_id);

module.exports = async function (request, response) {
  if (!request.query.id_token) {
    response.status(400).json({ message: 'id_token has not been provided' });
    return;
  }

  await app
    .auth()
    .verifyIdToken(request.query.id_token)
    .then(async (id_token) => {
      const message = await stripe.xxx(id_token);
      response.status(200).json({ message });
      return;
    })
    .catch((error) => {
      return response.status(401).json({ message: 'You are currently not logged in as an authorised user' });
    });
};

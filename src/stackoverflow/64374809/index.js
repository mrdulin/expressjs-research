const axios = require('axios');

const callValidateCookieApi = async (cookie) => {
  try {
    const config = {
      method: 'post',
      url: process.env.API_COOKIE_VALIDATION,
      headers: {
        Cookie: cookie,
      },
    };
    return await axios(config);
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

module.exports = { callValidateCookieApi };

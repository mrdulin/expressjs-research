const axios = require('axios');
const express = require('express');
const app = express();

var endpointFunction = async (req, res) => {
  try {
    const a = await get5LatestAnime();
    console.log(a);
    const b = await get5LatestManga();
    console.log(b);
    res.status(200).json({ watch: a[0].titles, read: b[0].titles });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err.message });
  }
};

async function get5LatestAnime(ballot) {
  const { data } = await axios.get('https://anime.website.com/');
  return data;
}
async function get5LatestManga(confirmationNumber) {
  const { data } = await axios.get(`https://manga.website.com/`);
  return data;
}

app.get('/endpoint', endpointFunction);

module.exports = { app };

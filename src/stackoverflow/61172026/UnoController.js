const UnoModel = require('./UnoModel');

async function getGameInfo(req, res) {
  const data = await UnoModel.getGameInfo(req.params.id);
  if (data == null) return res.status(404).json({ message: 'Room Not Found' });
  res.json(data);
}

exports.getGameInfo = getGameInfo;

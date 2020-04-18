async function _secretString(param: string): Promise<string> {
  return 'real secret';
}

async function route(req, res) {
  const secret = await _secretString(req.params.secret);
  console.log(secret);
}

export default {
  _secretString,
  route,
};

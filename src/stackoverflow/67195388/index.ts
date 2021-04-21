import jwt from 'jsonwebtoken';
import util from 'util';
const jwtPromise = util.promisify(jwt.verify);
const secret = 'shhhhh';
const wrongSecret = '123';

const token = jwt.sign({ foo: 'bar' }, secret);

export const store = async () => {
  const r = await verify(token, secret);
  console.log(r);
};

store();

function verify(token, secret) {
  return jwtPromise(token, secret)
    .then((decoded) => ({ err: null, decoded }))
    .catch((err) => ({ err, decoded: null }));
}

import bs58 from 'base-58';
import express from 'express';

const app = express();
const replacerFunction = (key: any, value: any) => {
  if (value?.type === 'Buffer') {
    return bs58.encode(Buffer.from(value));
  }
  return value;
};

app.set('json replacer', replacerFunction);

app.get('/', (req, res) => {
  const AccountRegistered = {
    account: {
      id: Buffer.from('123', 'utf8'),
      uri: ['mailto:Lizzie.Koepp@hotmail.com', 'tel:366-643-7219'],
      features: ['585'],
      nickname: 'Consultant',
    },
  };
  res.status(200).json(AccountRegistered);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

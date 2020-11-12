import { object } from './obj';

export async function main() {
  const params = {};
  return object
    .firstCall(params)
    .promise()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

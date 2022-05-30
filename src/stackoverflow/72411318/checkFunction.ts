import { myarray } from './constants';

export function check(value) {
  console.log('myarray: ', myarray);
  return myarray.includes(value);
}

import STATIC_DATA from './static-data';

export function getData(key) {
  return STATIC_DATA[key].include ? 'foo' : 'bar';
}

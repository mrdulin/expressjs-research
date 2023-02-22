import { DBNAME } from './db';

export const func1 = async () => {
  const getData = await DBNAME.scope('includeEverything').findAll();
  return getData;
};

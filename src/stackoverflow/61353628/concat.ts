export const concat = (str1: string, str2: string) => {
  if (str1.length === 0 || str2.length === 0) {
    throw new Error('either of the strings are empty');
  }
  let result = str1 + ' ' + str2;
  return result;
};

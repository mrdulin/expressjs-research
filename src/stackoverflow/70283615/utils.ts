import fs from 'fs';

export async function writeToFile(path, data, append) {
  const func = append ? fs.appendFile : fs.writeFile;
  console.log(func);
  return func(path, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

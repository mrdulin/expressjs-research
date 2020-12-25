import tempServer from './tempServer';
import url from 'url';

function main() {
  const server = tempServer(3000);

  return server.then(({ req, res }) => {
    console.log(req.url);
    const data = url.parse(req.url!, true).query;
    console.log(data);
    res.write('Error: ' + data.error);
    res.end();
  });
}
main();

import http from 'http';

export default function tempServer(port: number): Promise<{ req: http.IncomingMessage; res: http.ServerResponse }> {
  return new Promise((resolve) => {
    const server = http
      .createServer(function (req, res) {
        resolve({ req, res });
        console.log('===');
        server.close(() => console.log('server shutdown'));
      })
      .listen(port, () => console.log(`server started at http://localhost:${port}`));
  });
}

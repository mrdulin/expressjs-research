import request, { Options } from 'request-promise';

async function test() {
  const options: Options = {
    resolveWithFullResponse: true,
    method: 'GET',
    uri: 'https://api.itbook.store/1.0/search/nodejs',
    json: true
  };

  try {
    const response = await request(options);
    // console.log('response: ', response);
    console.log('response uri: ', response.request.uri);
    console.log('response href: ', response.request.uri.href);
  } catch (error) {
    console.error(error);
  }
}

test();

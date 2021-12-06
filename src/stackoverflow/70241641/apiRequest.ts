import request from 'request-promise';

const request1 = async (data) => request({ uri: 'service1.com/get', method: 'GET' });

export const apiRequests = async (data) => {
  const req1 = await request1(data);
  const req2 = await request1(data);
  console.log(req1, req2);

  if (req1 && req2) {
    const req3 = await request1(data);
    const req4 = await request1(data);

    return 'Second return';
  }
  return 'First return';
};

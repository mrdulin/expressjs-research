import axios, { AxiosRequestConfig } from 'axios';

export async function getName() {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'someUrl',
    headers: {},
  };
  const res = await axios(config);
  return res;
}

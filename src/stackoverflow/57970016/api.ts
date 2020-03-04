export async function getmythings(arg1, arg2) {
  const url = '/someurl';
  return fetch(url)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => error);
}

function isDefined(obj) {
  return typeof obj !== 'undefined';
}

export async function fetchInfo(url, id) {
  //
}

export async function onConfigEvent(event, otherConfig) {
  const myConfig = event.config;

  const info = await fetchInfo(otherConfig.detailsPath, myConfig.Id);

  if (!isDefined(info)) {
    console.log('info is undefined.');
    return;
  }
}

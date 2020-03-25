type Config = any;
type myEvent = any;
let config: Config | undefined;

function isDefined(obj) {
  return obj !== undefined;
}

export default function onConfigEvent(event: myEvent) {
  if (isDefined(config)) {
    console.log('Ignoring config event because we already have the config.');
    return;
  }

  config = event.config as Config;

  if (!config.firstThing) {
    console.log('config miss first thing.');
    return;
  }

  if (!config.otherthing) {
    console.log('config missing second thing.');
    return;
  }
}

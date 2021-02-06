import mqtt from 'mqtt';

const someConfigAddress = '127.0.0.1';
const someConfigPort = 6666;

export const setupConnection = (): mqtt.MqttClient => {
  return mqtt.connect(`${someConfigAddress}:${someConfigPort}`);
};

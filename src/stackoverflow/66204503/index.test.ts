import mqtt from 'mqtt';
import * as mqttClient from './';
import sinon from 'sinon';
import { expect } from 'chai';

describe('Mqtt-Client Tests: ', () => {
  it('SetupConnection() should call connect once', () => {
    const connectSpy = sinon.stub(mqtt, 'connect');
    mqttClient.setupConnection();
    expect(connectSpy.called).to.be.true;
  });
});

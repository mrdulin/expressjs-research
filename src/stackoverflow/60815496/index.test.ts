import sinon from 'sinon';
import { assert } from 'chai';
import rewire from 'rewire';
type ConfigEvent = any;
const events = { Config: 'Config' };

describe('OnConfigEvent', () => {
  let onConfigEvent;
  let mod;
  beforeEach(() => {
    mod = rewire('./');
    onConfigEvent = mod.default;
  });
  afterEach(() => {
    mod.__set__({ config: undefined });
  });
  it('should log missing first thing', () => {
    let event: ConfigEvent = {
      type: events.Config,
      config: { ['firstThing']: false },
    };
    let spy = sinon.spy(console, 'log');
    onConfigEvent(event);
    assert(spy.calledWith('config miss first thing.'));
    spy.restore();
  });

  it('should log missing second thing', () => {
    let event: ConfigEvent = {
      type: events.Config,
      config: { ['firstThing']: true },
    };
    let spy = sinon.spy(console, 'log');
    onConfigEvent(event);
    assert(spy.calledWith('config missing second thing.'));
    spy.restore();
  });
});

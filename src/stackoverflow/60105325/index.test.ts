import sinon from 'sinon';

const callbackCaller = (cb: (msg: string) => void, msg: string) => {
  cb(`CallbackCaller called with ${cb}, ${msg}`);
};

describe('This seems wrong', () => {
  it("should pass but doesn't", () => {
    const callback = (msg: string) => {
      console.log(`Callback called with ${msg}`);
    };

    const callbackSpy = sinon.spy(callback);

    callbackCaller(callbackSpy, 'tarfu');
    sinon.assert.called(callbackSpy);
  });
});

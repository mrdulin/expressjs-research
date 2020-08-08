;(function(name, definition) {

  const amd = typeof define === 'function';
  const cmd = typeof module !== 'undefined' && module.exports;

  if(amd) {
    define(definition);
  } else if(cmd) {
    module.exports = definition;
  } else {
    this[name] = definition;
  }

})('jsonpWrapper', function jsonpWrapper() {
  let counter = 0;
  const DEFAULT_CALLBACK_PARAMETER = 'callback';
  const CALLBACK_NAME = 'jsonpWrapper.callback';
  const doc = window.document;
  let dom_script, callbackName;

  return function jsonp(url, parameter) {
    parameter = parameter || DEFAULT_CALLBACK_PARAMETER;
    callbackName = 'callback' + counter++;
    console.log(callbackName);
    dom_script = doc.createElement('script');

    url = `${url}&${parameter}=jsonpWrapper.${callbackName}`;

    function jsonpCallbackWrapper(r) {
      return function jsonpCallback(data) {
        r(data);
        doc.body.removeChild(dom_script);
        jsonpWrapper[callbackName] = null;
      }
    }

    return new Promise((resolve, reject) => {
      jsonpWrapper[callbackName] = jsonpCallbackWrapper(resolve);
      dom_script.onerror = jsonpCallbackWrapper(reject);
      dom_script.src = url;
      doc.body.appendChild(dom_script);
    });
  }
});

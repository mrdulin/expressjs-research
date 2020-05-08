module.exports = function(onSuccess, onError) {
  var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('ok');
    }, 1000);
  });

  p.then(function(response) {
    onSuccess(response);
  }).catch(function(error) {
    onError(error);
  });
};

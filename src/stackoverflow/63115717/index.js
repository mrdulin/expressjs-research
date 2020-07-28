function get() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 1000),
  );
}

(function controller() {
  var myWorkspace = [];
  get().then((res) => {
    myWorkspace = res;
    console.log('get response:', myWorkspace);
  });
  console.log('res.render:', myWorkspace);
})();

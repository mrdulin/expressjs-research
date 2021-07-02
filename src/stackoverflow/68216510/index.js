function testee() {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(777);
    }, 1000);
  });

  return myPromise;
}

module.exports = { testee };

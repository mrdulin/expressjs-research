const cache = (func) => {
  let cache = {};
  let stringFromArgs;
  return (...args) => {
    let n = args[0];
    if (stringFromArgs === JSON.stringify(args)) {
      return cache[n];
    } else {
      stringFromArgs = JSON.stringify(args);
      cache[n] = func(...args);
      return cache[n];
    }
  };
};

module.exports = cache;

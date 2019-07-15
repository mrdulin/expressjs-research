function A(random) {
  const something = exports.B();
  if (random === something) {
    return true;
  } else {
    return false;
  }
}

function B() {
  const something = 'hello';

  return something;
}

exports.A = A;
exports.B = B;

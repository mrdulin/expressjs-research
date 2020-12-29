const business = 'Jack&#x27;s Cereal Shack';
const REG_HEX = /&#x([a-fA-F0-9]+);/g;

function decodeHex(val) {
  return val.replace(REG_HEX, function (match, group1) {
    const num = parseInt(group1, 16); //=> 39
    return String.fromCharCode(num); //=> '
  });
}

const businessDecoded = decodeHex(business);
console.log(businessDecoded);

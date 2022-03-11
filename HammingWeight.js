/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const binaryString = n >= 0 ? n.toString(2) : (~n).toString(2);
  let counter = 0;

  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] == "1") counter++;
  }
  return counter;
};

console.log(hammingWeight(0010001));

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const arrNumber = x.toString().split("");

  for (let i = 1; i <= arrNumber.length / 2; i++) {
    const isEqual = arrNumber[i - 1] === arrNumber[arrNumber.length - i];
    if (isEqual && i <= arrNumber.length / 2) continue;
    return false;
  }
  return true;
};

console.log(isPalindrome(121), "true"); // true
console.log(isPalindrome(1221), "true"); // true
console.log(isPalindrome(1231), "false"); // false
console.log(isPalindrome(123), "false"); // false

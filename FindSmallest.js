const findSmallestPositive = (arr) => {
  const sortedArr = arr.sort().filter((x) => x > 0);
  var result = 1;

  if (!sortedArr) return result;

  for (i = sortedArr.length - 1; i > 0; i--) {
    if (sortedArr[i] - sortedArr[i - 1] > result) return i + 1;
  }

  return result;
};

console.log(findSmallestPositive([-1, 1, 5, 3, 2]));
console.log(findSmallestPositive([1]));
console.log(findSmallestPositive([-1, 0, 1, 3]));
console.log(findSmallestPositive([1, 2, 3, 4]));

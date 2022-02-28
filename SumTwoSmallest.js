const sumTwoSmallest = (numbers) => {
  var [smallest, secondSmallest] = numbers.sort((a, b) => a - b);
  return smallest + secondSmallest;
};

console.log(sumTwoSmallest([0, 123, 55, 98, 6, 12]));

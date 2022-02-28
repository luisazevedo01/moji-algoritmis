const arrNumbers = [9, 12, 3, 5, 9, 1, 2, 3, 5, 9, 2];

// O(n) time complexity
const sumNumbers = (numbers) => {
  var result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
};

console.log(sumNumbers(arrNumbers));

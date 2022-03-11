/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length - 2; i++) {
    const x = nums[i],
      y = nums[i + 1],
      z = nums[i + 2];

    if (z < x + y) return x + y + z;
  }

  return 0;
};

console.log(largestPerimeter([2, 1, 2])); // != 0
console.log("///////");
console.log(largestPerimeter([1, 1, 2])); // === 0
console.log("///////");
console.log(largestPerimeter([3, 2, 3, 4])); // === 10

'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
const getMaxAbsoluteNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  // let maxNum = -Infinity;
  // arr.forEach(num => {
  //   if (Math.abs(num) > maxNum) {
  //     maxNum = Math.abs(num);
  //   }
  // });
  // return maxNum;
  const maxNum = arr.map(num => Math.abs(num));
  return Math.max(...maxNum);
};

// examples
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
console.log(getMaxAbsoluteNumber([])); // ===> null

// input: arr
// output: num

// 1. array iteration
// 2. number[i] => Math.abs();
// 3. find minimal number[i] Math.abs();
// 4. minimal number[i] => abs() => Math.pow(7, 2); // 49

export const getMinSquaredNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  const numAbs = arr.map(num => Math.abs(num));
  const minNum = Math.min(...numAbs);
  return minNum ** 2;
};

// [-777, 3, -2, 6, 45, -20]

// console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20]));

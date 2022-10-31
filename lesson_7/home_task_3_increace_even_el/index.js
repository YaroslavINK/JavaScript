const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let endArr = [];

  arr.map(num => {
    if (num % 2 === 0) {
      endArr.push(num + delta);
    } else {
      endArr.push(num);
    }
  });
  return endArr;
};

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
// Output: [22, 5, 26, 28, 11, 9, 24];

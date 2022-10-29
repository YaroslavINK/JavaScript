function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let endRes = [];
  for (let index of arr) {
    if (index % 2 === 0) {
      endRes.push(index + delta);
    } else {
      endRes.push(index);
    }
  }
  return endRes;
}

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []

function getSum(startInterval, endInterval) {
  let result = 0;
  for (let i = startInterval; i <= endInterval; i += 1) {
    if (i % 2 === 0) {
      result += i;
    }
  }
  return result;
}

console.log(getSum(1, 10));

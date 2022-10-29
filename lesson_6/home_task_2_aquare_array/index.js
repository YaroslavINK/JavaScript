function squareArray(arr) {
  let aquareResult = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let index of arr) {
    aquareResult.push(index * index);
  }
  return aquareResult;
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]
console.log(squareArray(1)); // ==> null

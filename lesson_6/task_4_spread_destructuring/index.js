const arrForTest = [1, 2, 3, 4];
function swap(arr) {
  const [first, ...last] = arr;
  return [...last, first];
}

console.log(swap(arrForTest));

function swapManual(arr) {
  let newArr = arr.slice();
  let newArrAgent = newArr.shift();
  let newArrEnd = newArr.push(newArrAgent);
  return newArr;
}
console.log(swapManual(arrForTest));
// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]

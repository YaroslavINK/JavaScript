function sum(from, to) {
  let result = 0;
  for (let i = from; i <= to; i += 1) {
    result += i;
  }
  return result;
}
// // examples
// console.log(sum(5, 10)); // ===> 45
// console.log(sum(11, 11)); // ===> 11

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  const endResult = sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
  return endResult;
}

console.log(compareSums(5, 10, 5, 10)); // ===> false
console.log(compareSums(5, 15, 3, 5)); // ===> true
console.log(compareSums(-2, 5, 5, 9)); // ===> false

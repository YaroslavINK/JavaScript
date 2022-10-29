function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const newArr = arr.slice();
  newArr.reverse();

  return newArr;
}
const numb = [11, 22, 33, 55, 66];
console.log(reverseArray(numb));
console.log(numb);

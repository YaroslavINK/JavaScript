//put your code here
export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [...arr].reverse();
};

console.log(reverseArray([1, 2, 3, 4, 5, 6]));
console.log(reverseArray(['a', 'b', 'c', 'd', 'e', 'f']));

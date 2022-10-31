const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  //   const reversArr = [...arr];
  //   return reversArr.reverse();
  return [...arr].reverse();
};

console.log(reverseArray([1, 2, 3, 4, 5, 6]));

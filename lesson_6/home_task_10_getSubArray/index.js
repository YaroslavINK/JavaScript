const getSubArray = (arr, numberOfElements) => {
  const newArray = arr.splice(0, numberOfElements);
  return newArray;
};

console.log(getSubArray([11, 4, 8, 3], 2));
console.log(getSubArray([1, 2, 3, 4, 5], 3));

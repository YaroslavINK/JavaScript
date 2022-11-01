const sum = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((acc, element) => {
    return acc + element;
  });
};

console.log(sum([1, 2, 3, 4, 5, 6]));

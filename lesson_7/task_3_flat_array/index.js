const flatArray = arr => {
  return arr.flat().sort((a, b) => a - b);
};

const array = [1, [3, 2, 4], 6, [5]];
console.log(flatArray(array));

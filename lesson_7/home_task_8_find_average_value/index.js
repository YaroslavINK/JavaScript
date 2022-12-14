const arrAverage = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.reduce((acc, element) => acc + element) / arr.length;
};

console.log(arrAverage([2, 5, 6, 3, 9]));

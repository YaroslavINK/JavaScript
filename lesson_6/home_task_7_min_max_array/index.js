const arri = [1, 2, 3, 4];
function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let maxNumber = (a, b) => {
      return a > b ? a : b;
    },
    minNumber = (a, b) => {
      return a < b ? a : b;
    };
  return arr.reduce(maxNumber) + arr.reduce(minNumber) > 1000;
}

console.log(checker(arri));

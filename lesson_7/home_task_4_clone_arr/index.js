const cloneArr = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [...arr];
};

const array = [1, 2, 3];
console.log(cloneArr(array));

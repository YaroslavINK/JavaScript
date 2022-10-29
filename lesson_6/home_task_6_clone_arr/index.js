function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const [...newitems] = arr;
  return [...newitems];
}

console.log(cloneArr([1, 2, 3, 4]));

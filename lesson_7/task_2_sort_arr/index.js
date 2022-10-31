const sortDesc = arr => {
  // let copyArr = [...arr];
  return [...arr].sort((a, b) => b - a);
};
const arr = [1, 11, 23, 19, 2, 3];
console.log(sortDesc(arr));

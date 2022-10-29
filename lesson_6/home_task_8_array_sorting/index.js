// ******** Сортировка масива чисел по зростанню і по зменшенню*******

function sortNumbersAsc(a, b) {
  return a > b ? 1 : b > a ? -1 : 0;
}

function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.sort(sortNumbersAsc);
}

console.log(sortAsc([109, 136, 156, 188, 19, 190, 2, 34, 55, 90]));

function sortNumbersDesc(a, b) {
  return a > b ? -1 : b > a ? 1 : 0;
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.sort(sortNumbersDesc);
}

console.log(sortDesc([109, 136, 156, 188, 19, 190, 2, 34, 55, 90]));

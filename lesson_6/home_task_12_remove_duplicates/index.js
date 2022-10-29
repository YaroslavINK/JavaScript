------ видалення дублікатів і створення нового масиву унікальних чисел----------------
function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const newArr = Array.from(new Set(array));
  return newArr;
}

console.log(removeDuplicates([1, 2, 3, 5, 1, 6, 2, 5, 6, 7]));

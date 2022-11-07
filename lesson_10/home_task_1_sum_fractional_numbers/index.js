const getTotalPrice = arr => {
  // eslint-disable-next-line no-return-assign, no-param-reassign
  const numberSum = arr.reduce((acc, num) => (acc += num));
  return '$' + Math.floor(numberSum * 100) / 100;
};

// 1 ітерація по масиву
// 2 сума аргументів масиву
// 3 округлення до 2х знаків флор

const array = [14.234, 34.2655, -24.324234, 24];

console.group(getTotalPrice(array));

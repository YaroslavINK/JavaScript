const array = [4, 5.6, '   5.7kal', null, NaN, Infinity, undefined, 2, -6, 78, 99];

const getFiniteNumbers = arr => arr.filter(num => Number.isFinite(num));
console.log(getFiniteNumbers(array));

const getFiniteNumbersV2 = arr => arr.filter(num => isFinite(num));
console.log(getFiniteNumbersV2(array));

const getNaN = arr => arr.filter(num => Number.isNaN(num));
console.log(getNaN(array));

const getNaNV2 = arr => arr.filter(num => isNaN(num));
console.log(getNaNV2(array));

const getIntegers = arr => arr.filter(num => Number.isInteger(num));
console.log(getIntegers(array));

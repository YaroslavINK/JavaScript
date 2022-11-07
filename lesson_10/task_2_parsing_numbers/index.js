const array = [4, 5.6, '   5.7kal', null, NaN, Infinity, undefined, 2, -6, 78.4, 99];

const getParsedIntegers = arr => arr.map(num => Number.parseInt(num));
console.log(getParsedIntegers(array));

const getParsedIntegersV2 = arr => arr.map(num => parseInt(num));
console.log(getParsedIntegersV2(array));

const getParsedFloats = arr => arr.map(num => Number.parseFloat(num));
console.log(getParsedFloats(array));

const getParsedFloatsV2 = arr => arr.map(num => parseFloat(num));
console.log(getParsedFloatsV2(array));

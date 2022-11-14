import getSum, { getSquareArray, getOddNumbers } from './calculator';

it('should get aquared numbers', () => {
  const result = getSquareArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it('should get only odd numbers', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);

  expect(result).toEqual([1, 3, 5]);
});

it('should get sum of numbers', () => {
  const result = getSum(2, 6);

  expect(result).toEqual(8);
});

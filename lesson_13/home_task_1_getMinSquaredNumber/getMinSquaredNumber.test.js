import { getMinSquaredNumber } from './getMinSquaredNumber';

// input empty arr
// input string
// input main task

it('should get result if input empty arr', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it('should get result if input string', () => {
  const result = getMinSquaredNumber('text');

  expect(result).toEqual(null);
});

it('should get min squared number from numbers array', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6]);

  expect(result).toEqual(4);
});

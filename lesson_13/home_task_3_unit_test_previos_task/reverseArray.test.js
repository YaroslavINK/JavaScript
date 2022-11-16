import { reverseArray } from './reverseArray';

it('should get revers arr from input arr', () => {
  const result = reverseArray([1, 2, 3, 4, 5, 6]);

  expect(result).toEqual([6, 5, 4, 3, 2, 1]);
});

it('should get revers arr from input arr test_2', () => {
  const result = reverseArray(['a', 'b', 'c', 'd', 'e', 'f']);

  expect(result).toEqual(['f', 'e', 'd', 'c', 'b', 'a']);
});

it('should get null when input is not arr', () => {
  const result = reverseArray(2, 4);

  expect(result).toEqual(null);
});

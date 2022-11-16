import { getAdults } from './filterObject';

it('should get people who have turned 18', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });

  expect(result).toEqual({ Ann: 56 });
});

it('should get empty object when input empty object', () => {
  const result = getAdults({});

  expect(result).toEqual({});
});

it('should get people who have turned 18 test_2', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

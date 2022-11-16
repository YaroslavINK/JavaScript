import { calc } from './calculator';

it('should get the result of adding numbers', () => {
  const result = calc('2 + 2');

  expect(result).toEqual('2 + 2 = 4');
});

it('should get the result of subtracting numbers', () => {
  const result = calc('10 - 2');

  expect(result).toEqual('10 - 2 = 8');
});

it('should get the result of multiplication numbers', () => {
  const result = calc('2 * 3');

  expect(result).toEqual('2 * 3 = 6');
});

it('should get the result of division numbers', () => {
  const result = calc('10 / 2');

  expect(result).toEqual('10 / 2 = 5');
});

it('should get input type string', () => {
  const result = calc({ 2: 2 });

  expect(result).toEqual(null);
});

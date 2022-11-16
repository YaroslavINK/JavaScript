import { withdraw } from './withdrawArrMethod';

it('should get correct remainder on balans after some transaction', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});

it('should get correct remainder on balans after some transaction test_2', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 10);

  expect(result).toEqual(1390);
});

it('sould get result -1 when not enought money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 88);

  expect(result).toEqual(-1);
});

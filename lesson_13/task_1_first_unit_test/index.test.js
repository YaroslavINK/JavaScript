it('17 === 17', () => {
  expect(17).toEqual(17);
});

it('18 !== 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = arr => arr.filter(num => num % 2 === 0);

it('should get even numbers from arr', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);

  expect(result).toEqual([2, 4]);
});

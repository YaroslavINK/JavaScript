const calc = string => {
  const [num1, operator, num2] = string.split(' ');
  let res;
  // eslint-disable-next-line default-case
  switch (operator) {
    case '+':
      res = +num1 + +num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    case '/':
      res = num1 / num2;
      break;
  }
  return `${string} = ${res}`;
};

console.log(calc('2 + 2'));
console.log(calc('2 - 2'));
console.log(calc('2 * 2'));
console.log(calc('2 / 2'));

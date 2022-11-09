// const splitString = (str, num = 10) => {
//    if (typeof str !== 'string') {
//      return null;
//    }

// const resArr = [];

// }

const splitString = (str, num = 10) => {
  if (typeof str !== 'string') {
    return null;
  }
  const newArr = [];
  let firstNum = 0;
  while (true) {
    const res = str.substr(firstNum, num);
    if (res.length === 0) {
      break;
    }
    newArr.push(res.slice(0));
    firstNum += num;
  }
  if (newArr[newArr.length - 1].length !== num) {
    const divider = '.';
    const lastNum = num - newArr[newArr.length - 1].length;
    for (let i = 0; i < lastNum; i += 1) {
      newArr[newArr.length - 1] = newArr[newArr.length - 1].concat(divider);
    }
  }
  return newArr;
};
console.log(splitString('Hello, World!!! Today is a good day', 3));
console.log(splitString('Hello, World!!! Today is a good day', 4));
console.log(splitString('Hello, World!!! Today is a good day'));
console.log(splitString(null, 5));

const splitText = (str, num = 10) => {
  if (typeof str !== 'string') {
    return null;
  }
  const arr = [];
  let startNum = 0;
  while (true) {
    const res = str.substr(startNum, num);
    if (res.length === 0) {
      break;
    }
    arr.push(res[0].toUpperCase() + res.slice(1));
    startNum += num;
  }

  return arr.join('\n');
};

console.log(splitText('Say!!! today is a good day', 3));
console.log(splitText('say today is a good day', 4));
console.log(splitText(null, 4));
console.log(splitText(undefined, 4));

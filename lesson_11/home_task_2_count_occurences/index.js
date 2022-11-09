const countOccurrences = (text, str) => {
  if (str === '') {
    return null;
  }
  const res = text.split(str);
  return res.length - 1;
};

const text = 'tehas tehno tehno2 texst';
const text2 = 'Moloko holokost kolokol';

console.log(countOccurrences(text, 'te'));
console.log(countOccurrences(text2, 'lo'));
console.log(countOccurrences(text2, ''));
console.log(countOccurrences('', ' '));

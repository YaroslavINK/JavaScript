function getSpecialNumbers(from, to) {
  let specialNumbers = [];

  for (let i = from; i <= to; i += 1) {
    if (i % 3 === 0) {
      specialNumbers.push(i);
    }
  }

  return specialNumbers;
}

const specialNumbers = getSpecialNumbers(10, 30);
console.log(specialNumbers);

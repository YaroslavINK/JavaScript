const cleanTransactionsList = arr => {
  const res = [];
  arr.forEach(num => {
    if (typeof Math.abs(num) === 'number' && !isNaN(Math.abs(num))) {
      res.push('$' + Math.abs(num).toFixed(2));
    }
  });
  return res;
};
const numArr = ['  1.9 ', '16.4', 17, ' 1 dollar '];
console.log(cleanTransactionsList(numArr));

// інший варіант рішення

// const cleanTransactionList = arr => {
//   const res = [];
//   arr.map(el => {
//     if (+el) res.push(`$${parseFloat(el).toFixed(2)}`);
//   });
//   return res;
// };

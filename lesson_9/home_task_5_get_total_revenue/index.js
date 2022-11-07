const getTotalRevenue = transactions =>
  // eslint-disable-next-line no-return-assign, no-param-reassign
  transactions.map(el => el.amount).reduce((acc, element) => (acc += element));

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);

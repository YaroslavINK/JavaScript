// export
const wallet = {
  transactions: [1, 2, 3, 44, 55, 6765, 788, -22],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());

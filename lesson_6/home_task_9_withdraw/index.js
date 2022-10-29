function withdraw(clients, balances, client, amount) {
  let res = 0;
  for (let i = 0; i <= clients.length; i += 1) {
    if (clients[i] === client) {
      res = balances[i] - amount;
    }
    if (res < 0) {
      return -1;
    }
  }
  return res;
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 47, -6], 'Ann', 45));
console.log(withdraw(['Ann', 'John', 'User'], [1400, 47, -6], 'John', 45));
console.log(withdraw(['Ann', 'John', 'User'], [1400, 47, -6], 'User', 45));

// const withdraw = (clients, balances, client, amount) => {
//   const index = clients.indexOf(client);

//   return amount > balances[index] ? -1 : (balances[index] -= amount);
// };

const withdraw = (clients, balances, client, amount) => {
  if (clients.includes(client)) {
    const index = clients.indexOf(client);
    if (balances[index] - amount >= 0) {
      return (balances[index] -= amount);
    }
  }
  return -1;
};

const clients = ['Ann', 'John', 'User'];
const balances = [1400, 87, -6];
const client = 'John';
const amount = 40;
console.log(withdraw(clients, balances, client, amount));
console.log(balances);

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

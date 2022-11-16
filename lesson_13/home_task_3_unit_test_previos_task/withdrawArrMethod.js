export const withdraw = (clients, balances, client, amount) => {
  if (clients.includes(client)) {
    const index = clients.indexOf(client);
    if (balances[index] - amount >= 0) {
      return (balances[index] -= amount);
    }
  }
  return -1;
};

withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

let message = 'Just learn it';

export const sendMessage = name => {
  console.log(`${name}, ${message}! Your Gromcode`);
};

export const setMessage = text => {
  message = text;
};

sendMessage('Ann');

setMessage('Good job');

sendMessage('Ann');

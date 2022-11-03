const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

const emptyArr = {};

const getPeople = obj =>
  Object.values(obj)
    .reduce((acc, element) => acc.concat(element), [])
    .map(el => el.name);

console.log(getPeople(rooms));
console.log(getPeople(emptyArr));

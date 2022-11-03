const user = { name: 'Tirion', email: 'support@hexlet.io', age: 44 };

const copyObj = obj => Object.assign({}, obj);

console.log(copyObj(user));

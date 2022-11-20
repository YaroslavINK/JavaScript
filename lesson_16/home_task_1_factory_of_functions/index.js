//export

// 1 input number wich === return arr.length
// 2 return arr => arr.element = function(return function[i]);
// 3 if typeof !=== number => return null
// 4 if argument === undefined => return [];

const createArrayOfFunctions = num => {
  // if (num && typeof num !== 'number') {
  //   return null;
  // }
  let resultArr = [];
  if (typeof num !== 'number') {
    return null;
  }
  if (num === undefined) {
    return resultArr;
  }

  for (let index = 0; index < num; index += 1) {
    resultArr[index] = function () {
      return index;
    };
  }

  return resultArr;
};

console.log(createArrayOfFunctions(10)[9]());
console.log(createArrayOfFunctions());
console.log(createArrayOfFunctions('Ann'));

// const createArrayOfFunctions = num => {
//   if (num && typeof num !== 'number') {
//     return null;
//   }

//   const arr = [];
//   for (let i = 0; i < num; i++) {
//     arr[i] = function () {
//       return i;
//     };
//   }
//   return arr;
// };

// console.log(createArrayOfFunctions(10)[9]());
// console.log(createArrayOfFunctions());
// console.log(createArrayOfFunctions('text'));

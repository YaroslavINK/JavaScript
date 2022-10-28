// const numbers = [11, 22, 33, 55, 66];

// цикл For of

// for(let num of numbers) {
//   sumOfNumbers += num
// }

// function sum(numbers) {
//   let sumOfNumbers = 0;
//   for (let i = 0; i < numbers.length; i += 1) {
//     // console.log(numbers[i]);
//     sumOfNumbers += numbers[i];
//   }
//   return sumOfNumbers;
// }

// const sumOfElements = sum(numbers);
// console.log('Result: ' + sumOfElements);
// *******************************************************************************

// const numbers = [11, 22, 33, 55, 66];

// const arr = numbers;

// arr[2] = 1000;

// console.log(numbers);
// *****************************************************************************

// const people = ['Tom', 'Ana', 'Bob'];

// people[people.length] = 'Alex';

// console.log(people);
// *************************************************************

// function getSpecialNumbers(from, to) {
//   let specialNumbers = [];

//   for (let i = from; i <= to; i += 1) {
//     if (i % 3 === 0) {
//       specialNumbers.push(i);
//     }
//   }

//   return specialNumbers;
// }

// const specialNumbers = getSpecialNumbers(10, 30);
// console.log(specialNumbers);
// *****************************************************************

// const numbers = [11, 22, 33, 55, 66];

// // const a = numbers[0];
// // const b = numbers[1];

// const [a, b] = numbers;

// console.log(a, b);
// **************************************************
// const numb = [11, 22, 33, 55, 66];

// function swap(arr) {
//   const [start, ...rest] = arr;
//   return [...rest, start];
// }

// console.log(swap(numb));
// **************************************************

// function getArrayBounds(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return [arr.length, arr[0], arr[arr.length - 1]];
// }

// // examples
// console.log(getArrayBounds([1, 10, 9, 11])); // ==> [4, 1, 11]
// console.log(getArrayBounds(10, 12, 14)); // ==> null
// console.log(getArrayBounds([1])); // ==> [1, 1, 1]
// ************************************************************************

// function getSum(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum;
// }

// // examples
// console.log(getSum([1, 10, -10, 4])); // ==> 5
// console.log(getSum([1])); // ==> 1
// console.log(getSum([-8, 8])); // ==> 0
// console.log(getSum(10, 12, 14)); // ==> null
// ****************************************************************************

// function getSpecialNumbers(from, to) {
//   let result = [];
//   for (let i = from; i <= to; i++) {
//     if (i % 3 === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// // examples
// console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
// console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
// console.log(getSpecialNumbers(1, 2)); // ==> [ ]
// **********************************************************************************
// const arrForTest = [1, 2, 3, 4];
// function swap(arr) {
//   const [first, ...last] = arr;
//   return [...last, first];
// }

// console.log(swap(arrForTest));

// function swapManual(arr) {
//   let newArr = arr.slice();
//   //   for (let i = 1; i <= arr.length; i += 1) {
//   //     newArr.push(i);
//   //   }
//   let newArrAgent = newArr.shift();
//   let newArrEnd = newArr.push(newArrAgent);
//   return newArr;
// }
// console.log(swapManual(arrForTest));
// // examples
// console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
// console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
// ************************************************************************

// function createEmptyArray(len) {
//   const emptyArr = new Array(len);
//   //   emptyArr.length = len;
//   return emptyArr;
// }

// console.log(createEmptyArray(5));
// ***************************************
// function squareArray(arr) {
//   let aquareResult = [];
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   for (let index of arr) {
//     aquareResult.push(index * index);
//   }
//   return aquareResult;
// }

// // examples
// console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
// console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
// console.log(squareArray([1])); // ==> [1]
// console.log(squareArray(1)); // ==> null
// ***************************************************************************
// function checkSum(arr) {
//   let sum = 0;
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   for (let index of arr) {
//     sum += index;
//   }
//   return sum > 100;
// }

// // examples
// console.log(checkSum([10, 10, 10])); // ===> false
// console.log(checkSum([10, 99, 1])); // ===> true
// console.log(checkSum([-6, -3, 200])); // ===> true
// *****************************************************************

// function increaseEvenEl(arr, delta) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let endRes = [];
//   for (let index of arr) {
//     if (index % 2 === 0) {
//       endRes.push(index + delta);
//     } else {
//       endRes.push(index);
//     }
//   }
//   return endRes;
// }

// // examples
// console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
// console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
// console.log(increaseEvenEl([], 120)); // ===> []
// *****************************************************************************************************

// function reverseArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const newArr = arr.slice();
//   newArr.reverse();

//   return newArr;
// }
// const numb = [11, 22, 33, 55, 66];
// console.log(reverseArray(numb));
// console.log(numb);
// ******************************************

// function cloneArr(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const [...newitems] = arr;
//   return [...newitems];
// }

// console.log(cloneArr([1, 2, 3, 4]));
// ********************************************

// const arri = [1, 2, 3, 4];
// function checker(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let maxNumber = (a, b) => {
//       return a > b ? a : b;
//     },
//     minNumber = (a, b) => {
//       return a < b ? a : b;
//     };
//   return arr.reduce(maxNumber) + arr.reduce(minNumber) > 1000;
// }

// console.log(checker(arri));
// ******************************************************************

// ******** Сортировка масива чисел по возростанію і по убиванію*******
// function sortNumbersAsc(a, b) {
//   return a > b ? 1 : b > a ? -1 : 0;
// }

// function sortAsc(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   return array.sort(sortNumbersAsc);
// }

// console.log(sortAsc([109, 136, 156, 188, 19, 190, 2, 34, 55, 90]));

// function sortNumbersDesc(a, b) {
//   return a > b ? -1 : b > a ? 1 : 0;
// }

// function sortDesc(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   return array.sort(sortNumbersDesc);
// }

// console.log(sortDesc([109, 136, 156, 188, 19, 190, 2, 34, 55, 90]));
// ******************************************************************************
// const getSubArray = (arr, numberOfElements) => {
//   const newArray = arr.splice(0, numberOfElements);
//   return newArray;
// };

// console.log(getSubArray([11, 4, 8, 3], 2));
// console.log(getSubArray([1, 2, 3, 4, 5], 3));
// ************************************************************
// ------------ перевірка на наявність елемента в масиві --------------------
// const includes = (arr, num) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(includes([1, 2, 3, 4], 3));
// console.log(includes([1, 2, 3, 4], 5));
// ******************************************************
// ------ видалення дублікатів і створення нового масиву унікальних чисел----------------
// function removeDuplicates(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   const newArr = Array.from(new Set(array));
//   return newArr;
// }

// console.log(removeDuplicates([1, 2, 3, 5, 1, 6, 2, 5, 6, 7]));
// ************************************************************************************
// ------- знайти число яке повторяється більше 1 разу ---------
// const arr = [1, 2, 3, 4, 5, 6, 1, 7, 1, 4, 9, 9, 9, 9, 9, 9, 10, 3];

// const uniqueCount = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const uniqSet = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < i; j++)
//       if (arr[j] === arr[i]) {
//         uniqSet.add(arr[i]);
//       }
//   }

//   const uniq = Array.from(uniqSet);

//   return uniq;
// };

// console.log(uniqueCount(arr));

// const numbers = [4, 3, 3, 1, 15, 7, 4, 19, 19, 19]; // исходный массив

// // получаем объект в котором ключ - это элемент массива,
// // а значение - количество вхождений
// // { '4': 2, '3': 2, '1': 1 ... }
// const countItems = numbers.reduce((acc, item) => {
//   acc[item] = acc[item] ? acc[item] + 1 : 1; // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
//   return acc;
// }, {});

// // обрабатываем ключи объекта
// const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
// console.log(result); // => ['3', '4', '19']
// *****************************************************************************************************
function withdraw(clients, balances, client, amount) {
  let res = 0;
  for (let i = 0; i < clients.length; i += 1) {
    if (balances[i] < amount) {
      return -1;
    }
    if (clients[i] === client) {
      res = balances[i] - amount;
      balances[i] = balances[i] - amount;
    }
  }
  return res;
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 47, -6], 'John', 50));
// ***************************************************************************************************

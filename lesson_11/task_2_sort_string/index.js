// const sortContacts = contactsArr => {
//   const result = contactsArr.sort((a, b) => {
//     return a.name.localeCompare(b.name);
//   });
//   return result;
// };

// console.log(sortContactsArr());

const sortContacts = (arr, bool) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copyArr = [...arr];
  if (bool === false) {
    copyArr.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  } else {
    copyArr.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }
  return copyArr;
};

const contactsArray = [
  { name: 'Tom', number: '555 - 555 - 777' },
  { name: 'Alex', number: '555 - 555 - 775' },
  { name: 'John', number: '555 - 555 - 774' },
  { name: 'Dron', number: '555 - 555 - 773' },
];

console.log(sortContacts(contactsArray));
console.log(sortContacts(contactsArray, true));
console.log(sortContacts(contactsArray, false));
console.log(sortContacts('text', true));
console.log(sortContacts(58, true));

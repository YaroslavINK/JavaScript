/**
 * @param {object} obj
 * @return {undefined}
 */
function getKeys(obj) {
  Object.keys(obj).forEach(element => {
    console.log(element);
  });
}

// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel

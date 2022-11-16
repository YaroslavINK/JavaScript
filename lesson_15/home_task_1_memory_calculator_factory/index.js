//export
const createCalculator = () => {
  let memory = 0;
  function add(number) {
    memory += number;
  }

  function decrease(number) {
    memory -= number;
  }

  function reset() {
    memory = 0;
  }

  function getMemo() {
    return memory;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calculator1 = createCalculator();
calculator1.add(10);
calculator1.reset();
console.log(calculator1.getMemo());

const calculator2 = createCalculator();
calculator2.add(10);
calculator2.decrease(2);
console.log(calculator2.getMemo());

const calculator3 = createCalculator();
calculator3.add(10);
calculator3.decrease(2);
calculator3.add(5);
console.log(calculator3.getMemo());

const calculator4 = createCalculator();
calculator4.add(10);
calculator4.decrease(15);
console.log(calculator4.getMemo());

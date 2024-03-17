function CounterApp(initValue) {
  let countValue = initValue ?? 0;

  return {
    value: () => countValue,
    increment: () => countValue++,
    decrement: () => countValue--,
  };
}

let counter = CounterApp(1);
let counter2 = CounterApp(1);
console.log(counter.value()); // 1
counter.increment();
console.log(counter.value()); // 2

console.log(counter2.value()); // 1
counter2.decrement();
console.log(counter2.value()); // 0

console.log(counter.value()); // 2

// Path: test.js

function CounterApp(initValue) {
  let countValue = initValue ?? 0;

  return {
    value: () => countValue,
    increment: () => countValue++,
    decrement: () => countValue--,
  };
}
counter = CounterApp(1);
counter2 = CounterApp(1);
console.log(counter.value()); // 1

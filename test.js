function sum(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

const sum5 = sum(5);

console.log(sum5(95)); // 7
const sum10 = sum(10);
console.log(sum10(95)); // 105

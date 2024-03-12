function sum(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

const sum5 = sum(5);

//성인 20세 나이 측장
// 20세 이상이면 성인으로 판단
// 20세 미만이면 미성년자로 판단

function isAdult(age) {
  if (age >= 20) {
    return "성인입니다.";
  } else {
    return "미성년자입니다.";
  }
}

console.log(isAdult(20)); // true
console.log(isAdult(19)); // false

//성인이면 술을 마실 수 있습니다.
//미성년자면 술을 마실 수 없습니다.

function canDrink(age) {
  if (age >= 20) {
    return "술을 마실 수 있습니다.";
  } else {
    return "술을 마실 수 없습니다.";
  }
}

console.log(canDrink(20)); // true
console.log(canDrink(19)); // false

//성인이면 운전할 수 있습니다.

function canDrive(age) {
  if (age >= 20) {
    return "운전할 수 있습니다.";
  } else {
    return "운전할 수 없습니다.";
  }
}

console.log(canDrive(20)); // true

console.log(canDrive(19)); // false

//성인이면 투표할 수 있습니다.;
function canVote(age) {
  if (age >= 20) {
    return "투표할 수 있습니다.";
  } else {
    return "투표할 수 없습니다.";
  }
}

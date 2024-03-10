class Pereson {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getLocation() {
    return this.location;
  }
}

const me = new Pereson("문은준", 27, "korea");
const you = new Pereson("김나희", 27, "korea");

console.log(me.getName() + "와 " + you.getName() + " 연애중!");
console.log(
  me.getName() +
    "의 나이는 " +
    me.getAge() +
    "살" +
    "이고, " +
    me.getLocation() +
    "에 삽니다."
);
console.log(
  you.getName() +
    "의 나이는 " +
    you.getAge() +
    "살" +
    "이고, " +
    you.getLocation() +
    "에 삽니다."
);

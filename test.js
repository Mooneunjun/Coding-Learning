// 싱글 리터럴  객체
const object = {
  property: "value",
  method: function () {},
};

function NewObject(name) {
  this.name = name;
}

const newObject = new NewObject("John");

const newObject2 = Object.create(Object.prototype, {
  name: {
    value: "Jang",
    writable: true, //덮어쓸 수 있는지 여부
    enumerable: true, // 열거 가능한지 여부
    configurable: true, //  삭제 가능한지 여부
  },
});

newObject2.name = "kim";

for (const key in newObject2) {
  console.log(key);
}

newObject2;
newObject2.name = "park";
newObject2;

delete newObject2.name;
newObject2;

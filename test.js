const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

const prop = "prop";

obj.prop1;
obj[prop + 1];

console.log(obj[prop + 3]);

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  }
}

const person = {
  firstName: "John",
  location: "New York",
};

person.lastName = "Doe";

const fuck = "age";

person[fuck] = 25;

person;

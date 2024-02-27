function person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const me = new person("jang", 22, "korea");

me;

const me2 = new person("moon", 27, "korea");
me2;

console.log(me.name);
console.log(me["name"]);

console.log(me2.name);

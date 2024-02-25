const person = {
  _firstName: "Moon",
  _lastMame: "Eun-jun",

  get firstName() {
    return this._firstName.toUpperCase();
  },

  set firstName(newFirstName) {
    if (typeof newFirstName != "string") {
      this._firstName = "알 수 없는 이름";

      return;
    }
    this._firstName = newFirstName;
  },
};

// person.firstName = 1234;
console.log(person.firstName); // MOON

// Path: test.js

const person = {
  _firstName: "Moon",
  _lastMame: "Eun-jun",

  get firstName() {
    return this._firstName.toUpperCase();
  },

  set firstName(newFirstName) {
    if (typeof newFirstName != "string") {
      this._firstName = "알 수 없는 이름";

      return;
    }
    this._firstName = newFirstName;
  },
};

//

person.firstName = 1234;
console.log(person.firstName); // 알 수 없는 이름

// Path: test.js

const person = {
  _firstName: "Moon",
  _lastMame: "Eun-jun",

  get firstName() {
    return this._firstName.toUpperCase();
  },

  set firstName(newFirstName) {
    if (typeof newFirstName != "string") {
      this._firstName = "알 수 없는 이름";

      return;
    }
    this._firstName = newFirstName;
  },
};

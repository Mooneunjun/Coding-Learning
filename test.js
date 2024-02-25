const person = {
  firstNam: "jang",
  LastName: "hyeon-seok",

  get firstName() {
    return this.firstNam;
  },
};

console.log(person.firstName); // jang

const person = {
  name: "YUAH",
  greet(message) {
    console.log(`${message} ${this.name}`);
  },
};
const anotherPerson = {
  name: "KIM",
  age: 18,
};
person.greet.call(anotherPerson, "hola");
person.greet.apply(anotherPerson, ["hey"]);
const bindedGreet = person.greet.bind(anotherPerson, "my name is");
bindedGreet();

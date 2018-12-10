

//assign
const object1 = {
  a: 1,
  b: 2,
  c: 3,

};

const object2 = Object.assign({c: 4, d: 5}, object1);

console.log(object2.c, object2.d);

//create
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"


//entries
const object3 = { foo: 'bar', baz: 42 };
console.log(Object.entries(object3)[1]);
// expected output: Array ["baz", 42]

const object4 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(object4)[2]);
// expected output: Array ["2", "c"]

const result = Object.entries(object4).sort((a, b) => a - b);
console.log(Object.entries(result)[1]);



//freeze
const object5 = {
  property1: 42
};

const object6 = Object.freeze(object5);

object6.property1 = 33;
// Throws an error in strict mode

console.log(object6.property1);










// variables : var, let, const
// var not in use anymore
// let => Possible to change value
let age = 30;
age = 31;

// const => can't be change!

//Data types: String, Number, Boolean, null, undefined
const name = 'Mike'; // string
const age = 30; // number
const isCool = true; // Boolean
const x = null; // null
const y = undefined; // undefined
let z; // undefined

// concatenation
console.log('My name is' + name + ' and I am' + age);
// better way - template string
console.log(`My name is ${name} and I am ${age}`);

// methods have () properties don't!
// .toUpperCase() -> Method .length - property

//Methods:
// .substring(0, 5) > new string starting at position 0 and ending on 5)

// Arrays - variables that hold multiple values
 const numbers = new Array(1,2,3,4,5);
console.log(number);

const fruits = ['apples', 'oranges', 10, true];
console.log(fruits);
console.log(fruits[1]); // oranges
fruits.push = 'end'; // adds as the last position
fruits.unshift = 'begin'; // adds as the first position
fruits.pop(); // removes last one

// object literals
const person = {
  firstName: 'Mike',
  lastName: 'Baptista',
  age: 30,
  hobbies: ['padel', 'running', 'music'],
  address: {
    street: 'Rua Marcos Portugal',
    city: 'Lisbon',
  }
}
console.log(person.firstName, person.lastName, person.hobbies[1], person.address.city);
person.email = 'miguelvdsilva@gmail.com'

const toDos = [
  {
   id: 1,
   text: 'finish this cheat sheet',
   isCompleted: false
  }
  ];

console.log(toDos[0].text);

// LOOPs
// For
for(let i = 0; i < 10; i++) {
  console.log(`For loop number: ${i}`);
}  

// While
let i = 0;
while(i < 10) {
 console.log(`While Loop Number: ${i}`);
 i++;
}  


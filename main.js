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

// for arrays
for(let i = 0; i < toDos.length; i++) {
  console.log(toDos[i].text);
}  
// or
 for(let toDo of toDos) {
  console.log(toDo.text);
 }

// froEach, map , filter
toDos.forEach(funciton(toDo) {
 console.log(toDo.text);
});
const todoText = toDos.map(funciton(toDo) {
 return toDo.text 
});
const todoCompleted = toDos.filter(funciton(toDo) {
 return toDo.isCompleted === true; 
});
const todoCompleted = toDos.filter(funciton(toDo) {
 return toDo.isCompleted === true; 
}).map(funtion(todo) {
  return todo.text;       
});


// Conditionals
const x = 4;
const y = 10

if(x === 10) {
 console.log('x is 10');
} else if(x > 10) {
 console.log('x is greater than 10');
}
else {
 console.log('x is less 10');
} 

if(x > 10 || y > 10) {
 console.log('x is more than 5 or y is more than 10');
}
// || => or && => and

//ternary condition ? than : else
const  x = 10; 

const color = x > 10 ? 'red' : 'blue';

//switches
const  x = 10; 

const color = 'green';

switch(color) {
 case 'red':
  console.log('color is red');
  break;
 case 'blue':
  console.log('color is blue');
  break;
 default: 
  console.log('color is NOT red or blue');
  break;
}

// functions

function addNums(num1, num2) {
 console.log(num1 + num2);
}

addNums(5,4);

// if we want to add default values for the parameters


function addNums(num1 = 1, num2 = 0) {
 return num1 + num2;
}

console.log(addNums());
console.log(addNums(4,5));

// constructor function (start with a capitalize)
 function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
  this.getBirthYear = function() { // function within a function that can be called
   return this.dob.getFullYear();
  }
 }
 // instantiate object
const person1 = new Person('Mike', 'Baptista', '28-3-1992');
const person2 = new Person('Allison', 'Baptista', '28-3-1990');

console.log(person1);
console.log(person2.lastName);
console.log(person2.getBirthYear());

// Class 
class Person {
 constructor(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
  }
 
 getBirthYear() {
  return this.dob.getFullYear();
 }
}

console.log(person1);
console.log(person2.lastName);
console.log(person2.getBirthYear());

// DOM


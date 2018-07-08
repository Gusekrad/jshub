//console log

console.log("Hello World");
console.log("123");
console.log("true");
var greeting = 'Hello'; 
console.log(greeting);
console.log([1,2,3,4,5]);
console.log({a:1, b:2});
console.table({a:1, b:2});
console.error('My Error message');
console.clear();
console.warn('My Warn');
console.time('Hello');
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.timeEnd('Hello');
console.clear();

// var, let, const - объявление переменных
var name = 'John Doe';
console.log(name);
name = 'Steve';
console.log(name);

var greeting2;
console.log(greeting2);
greeting2 = 'Hello';
console.log(greeting2);

// название переменной может содержать только такие символы: буквы, числа, _, $.
//переменная не может начинаться с числа

// Multi word vars
var firstName = 'John'; // Camel Case REOMENDED
var first_Name = 'John'; // Underscore
var FirstName = 'John'; // Pascal Case SOMETIMES


//LET
let name2 = 'John Doe2';
console.log(name2);
name2 = 'Steve';
console.log(name2);

//const если константа объект или массив, то содержимое может быть изменено
const newName = 'Homer';
console.log(newName);

const person = {
  name: 'John',
  age: 30
}

console.log(person);
person.name = 'Sara';
person.age = 32;
console.log(person);


const numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers);
numbers.push(55);
console.log(numbers);
// numbers = [5,2,3,5,5,6,7,3,3]; это уже ошибка


// DATA TYPES

//PRIMITIVE

// String
const forName = 'John';

// Number
const age = 45;

console.log(typeof forName);
console.log(typeof age);

//Boolean
const forBoolean = true;

console.log(typeof forBoolean);

//Null
const car = null;

console.log(typeof car); //покажет, что это объект, но это баг, NULL это отдельный тип данных.

//Undefined
let test;
console.log(typeof test);

//Symbol ES6
const sym = Symbol();
console.log(typeof sym);


//REFERENCE TYPES - Objects

//Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

//Object literal
let address = {
  city: 'Boston',
  state: 'MA'
}
console.log(typeof address);


const today = new Date();
console.log(today);
console.log(typeof today);
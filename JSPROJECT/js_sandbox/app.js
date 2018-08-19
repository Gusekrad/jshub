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

// 6 простых типов данных: 
// String 
// Number 
// Boolean 
// Null (intentional empty value = умышленное пустое значение) 
// Undefined (переменная, которой не было присвоено значение) 
// Symbols(ES6)

// 5 сложных ссылочных типов данных:
// Object Literals
// Functions
// Dates
// Anything Else...
// Object Wrapers for strings and numbers

// Динамическая типизация

//PRIMITIVE

// String
const forName = 'John';

// Number
let age = 45;

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

/////////////////////////////////

// Конвертирование типов данных

//Number to string

let val = 5;
val = String(5555);
val = String(4+4);

//Bool to string

val = String(true)

// Date to string

val = String(new Date());

// Array to string

val = String([1,2,3,4,5,6,7]);

//Output

console.log(val);
console.log(typeof val);
console.log(val.length);

// toString() метод

let val2 = (543).toString(); //val2 = (true).toString();

console.log(val2);
console.log(typeof val2);
console.log(val2.length);


//String to number

val = Number('785');
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number([1, 2, 3, 4]); // NaN not a number
val = Number('55hello5');// NaN not a number

//Output

console.log(val);
console.log(typeof val)
//console.log(val.length);
console.log(val.toFixed(5)); 

//num.toFixed(n) округляет число num до n знаков после запятой, при необходимости добивает нулями до данной длины и возвращает в виде строки

// parseInt('') метод Функция parseInt и ее аналог parseFloat преобразуют строку в число символ за символом, пока это возможно. При возникновении ошибки возвращается число, которое получилось. Функция parseInt читает из строки целое число, а parseFloat – дробное.

val = parseInt('1002');
val = parseInt('1002.56');
val = parseFloat('1002.56');
//Output

console.log(val);
console.log(typeof val)
//console.log(val.length);
console.log(val.toFixed(5)); 


const valC1 = String(5);
const valC2 = 6;
const sumC3 = valC2 + valC1; //65 !!!!!!!!! string

console.log(sumC3); //65
console.log(typeof sumC3); // string !!!!!!!!


//Numbers and Math Object

const num1 = 100;
const num2 = 60;
val = undefined;

val = num1 + num2; console.log(val);
val = num1 * num2; console.log(val);
val = num1 - num2; console.log(val);
val = num1 / num2; console.log(val);
val = num1 % num2; console.log(val); // 40 % Оператор возвращает целый остаток от деления левого операнда на правый. Возвращаемое значение всегда получает знак делимого, а не делителя.

 // Math Object

 val = Math.PI;
 val = Math.E;
 val = Math.round(2.4); // 2
 val = Math.ceil(2.4); // 3
 val = Math.floor(2.8); // 2 
 val = Math.sqrt(25); // 5
 val = Math.abs(-7); // 7
 val = Math.pow(8, 2); // 65
 val = Math.min(8, 2, 56, -3); // -3
 val = Math.max(8, 2, 56, -3); // 56
 val = Math.random(); // случайное дробное число
 val = Math.floor(Math.random() * 20 + 1); // случайное число от 1 до 20
 console.log(val);

 //String Methods & Concatenation

 const fName = 'William';
 const lName = 'Johnson';
 const myage = 45;
 val = undefined;

 val = fName + lName;
 console.log(val);

 //Concatenation
 val = fName + ' ' + lName;
 console.log(val);

 //Append 

 val = 'Brad ';
 val += 'Traversy';
 console.log(val);

 val = 'Hello, my name is ' + fName + ' and I am ' + myage;

 console.log(val);

// Escaping

// val = 'That's awesome, I can't wait';

val = "That's awesome, I can't wait";
console.log(val);
val = 'That\'s awesome, I can\'t wait';

console.log(val);


// Length

val = fName.length; //property свойство, не метод
console.log(val);

// concat метод

val = fName.concat(' ', lName);

console.log(val);

//Change case

val = firstName.toUpperCase();
console.log(val);

val = firstName.toLowerCase();
console.log(val);

val = fName[0]; // строка как массив

console.log(val);

// indexOf(); возвращает индекс символа в строке, 
// lastIndexOf(); возвращает индекс последнего выбранного         символа в строке

val = fName.indexOf('a');

val = fName.lastIndexOf('l');
console.log(val);



// charAt();

val = fName.charAt('5');

console.log(val);

// Get last char

val = fName.charAt(fName.length - 1);

console.log(val);

// substring();

val = fName.substring(2, 6);

console.log(val);

// slice();

val = fName.slice(2, 6);
console.log(val);

val = fName.slice(-3);
console.log(val);

// split(); разбивка строки в массив с определённым разделителем

let str = 'That\'s awesome, I can\'t wait';

val = str.split(' ');

console.log(val);

// replace()

val = str.replace('awesome','nice'); 

console.log(val);

// includes();

val = str.includes('wait');

console.log(val);


// Template Literals

let name1 = 'John';
let age1 = 35;
let job1 = 'Webdeveloper';
let city1 = 'Miami';
let html;

// Without template strings (es5)

 html = '<ul><li>Name: ' + name1 + '</li><li>Age: ' + age1 + '</li><li>Job: ' + job1 + '</li><li>City: ' + city1 + '</li></ul>'; 

 html = '<ul>' +
        '<li>Name: ' + name1 + '</li>' +
        '<li>Age: ' + age1 + '</li>' +
        '<li>Job: ' + job1 + '</li>' +
        '<li>City: ' + city1 + '</li>' +
        '</ul>'; 

// With template strings/literals (es6)
function hello(){
  return 'hello';
}
html = `
  <ul>
    <li>Name: ${name1}</li>
    <li>Age: ${age1}</li>
    <li>Job: ${job1}</li>
    <li>City: ${city1}</li>
    <li> ${2+2}</li>
    <li>City: ${hello()}</li>
    <li>City: ${age1 > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`; 


 document.body.innerHTML = html;

 // Array and Array Methods

 const numbers1 = [43, 56, 33, 23, 44, 36, 5];
 const numbers2 = new Array(22, 45, 33, 76, 54);
 const numbers3 = [43, 100, 56, 33, 23, 44, 36, 5];
 const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
 const mixed = [22, 'Hello', 'true', undefined, null, {a:1, b:1}, new Date()];

 val = undefined;
 
 // Get array length
val = numbers1.length;
 
//Check if is array
val = Array.isArray(numbers1);

//Get single value
val = numbers1[4];
val = numbers1[3];

//Insert into array
numbers1[2] = 100;

// Find index of value
val = numbers1.indexOf(36);

// MUTATING ARRAYS
 numbers1.push(250); // add on to end
 numbers1.unshift(120); //  add on to front
 numbers1.pop(); // take off from end
 numbers1.shift(); // take off from front
 numbers1.splice(1,3); // splice values
 numbers1.reverse(); // reverse array
 val = numbers1.concat(numbers2);// concatenate array
 val = fruit.sort(); // sorting arrays
 val = numbers3.sort(); // отсортирует числа только по первой цифре
 // Use the "compare function"
 val = numbers3.sort(function(x, y){
   return x - y;
 });

 //Reverse sort
 val = numbers3.sort(function(x, y){
  return y - x;
});

// Find находит первое число которое меньше 50, зависит от передаваемой функции

function under50(num){
  return num < 50;
};

console.log(numbers1);

val = numbers1.find(under50);

 console.log(numbers1);
 console.log(val);

 // Object Literals

const person1 = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2018 - this.age;
  }
}

val = undefined;
val = person1;

//Get specific value
val = person1.firstName;
val = person1 ['lastName'];
val = person1.age;
val = person1.hobbies;
val = person1.hobbies[1];
val = person1.address;
val = person1.address.city;
val = person1.address['city'];
val = person1.getBirthYear();
console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23}
]

for(let i = 0; i< people.length; i++){
  console.log(people[i].name);
}

// Dates and Times
// https://developer.mozilla.org/ru/docs/Web/JavaScript

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Numbers_and_dates

 val = undefined;

 const today1 = new Date();
 let birthday = new Date('9-10-1981 11:25:00');
 birthday = new Date('September 11 1986');
 birthday = new Date('9/10/1981');

 val = today1;
 console.log(val);
 console.log(typeof val); //object

 val = today1.toString();
 console.log(val);
 console.log(typeof val); //string

 val = birthday;
 console.log(val);

 val = today1.getMonth(); // считает месяц начиная с нуля
 console.log(val);

 val = today1.getDate();
 console.log(val);

 val = today1.getDay();
 console.log(val); // если считать с воскресенья, то тоже считает дни с нуля

 val = today1.getFullYear();
 console.log(val); 

 val = today1.getHours();
 console.log(val);

 val = today1.getMinutes();
 console.log(val);

 val = today1.getSeconds();
 console.log(val);

 val = today1.getMilliseconds();
 console.log(val);

 val = today1.getTime();
 console.log(val);

 birthday.setMonth(0);
 birthday.setDate(18);
 birthday.setFullYear(2025);
 birthday.setHours(19);
 birthday.setMinutes(45);
 birthday.setSeconds(3);
 console.log(birthday);

 // If statements and Comparison Operators

//  if(something){
//    do something
//  } else {
//    do something else
//  }

let id = '100';

// EQUAL TO
if(id == 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO
if(id != 101){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if(id === 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO VALUE & TYPE
id = '100';
if(id !== 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Test if undefined

if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log(`NO ID`);
}

// GREATER OR LESS THAN
id = '300';
if(id >= 200){
  console.log(`Correct`);
} else {
  console.log(`Incorrect`);
}

//IF ELSE

let color = 'blue';

if (color === 'red'){
  console.log('Color is red');
} else if(color === 'blue'){
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// LOGICAL OPERATORS

// AND &&
name = 'Steve';
age = 36;

if(age >0 && age <12){
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19){
  console.log(`${name} is a teenager`)
} else {
  console.log(`${name} is an adult`);
}

// OR ||

if(age < 16 || age > 65){
  console.log(`${name} can not run in the race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
id = 100;
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECt')
else
  console.log('INCORRECt')

//SWITCH

color = 'blue';

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break;
}

day = undefined;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday'  
    break;
  case 1:
    day = 'Monday'  
    break;
  case 2:
    day = 'Tuesday'  
    break;
  case 3:
    day = 'Wednesday'  
    break;
  case 4:
    day = 'Thursday'  
    break;
  case 5:
    day = 'Friday'  
    break;
  case 6:
    day = 'Saturday'  
    break;
}
console.log(`Today is ${day}`);

// Function Declarations & Expressoins

// Function Declarations

function greet(firstName, lastName){
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

greet();
console.log(greet('John', 'Doe'));

// Default ES5

function greet(firstName, lastName){
  if(typeof firstName === 'undefined'){firstName = 'defName'}
  if(typeof lastName === 'undefined'){lastName = 'defLastname'}
  // firstName = firstName || 'defName';
  // lastName = lastName || 'defLastname';
  return 'Hello ' + firstName + ' ' + lastName;
}

greet();
console.log(greet());

// Default ES6

function greet(firstName = 'defName', lastName = 'defLastname'){

  return 'Hello ' + firstName + ' ' + lastName;
}

greet();
console.log(greet());

// Function Expressoins

// анонимная
let square = function(x = 8){
  return x*x;
};

console.log(square(5));

// не анонимная
let circle = function circle(){};

// Immidiatley Invokable Function Expressions IIFEs

// функции, которые обьявляются и запускаются одновременно

(function(){
  console.log('IIFE Ran...');
})();

(function(name = 'Alex'){
  console.log(`Hello ${name}`);
})('Govard');

// Property Methods

let todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.add();
todo.edit(22);

todo.delete = function(){
  console.log('Delete todo...');
}

todo.delete();

// General Loops

// for Loop

for(let i = 0; i < 10; i++){
  //console.log('Number ' + i);
  if(i === 2){
    console.log('2 is my favourite number');
    continue;
  }

  if(i === 6){
    console.log('Stop the loop');
    break;
  }  
  
  console.log('Number ' + i);
}

// While Loop

let i = 0;

while(i < 10){
  console.log('Number ' + i);
  i++;
}

// do while

i = 100;

do {
  console.log('Number' + i);
  i++;
} 

while (i < 10);

// loops with arrays

let cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);  

}

// forEach Method

cars.forEach(function(current){
  console.log(current);
});

cars.forEach(function(current, index){
  console.log(`${index} : ${current}`);
});

cars.forEach(function(current, index, array){
  console.log(`${index} : ${current}`);
  console.log(array);
});

// MAP

let users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'}
];

let ids = users.map(function(current){
  return current.id;
});

console.log(ids); // получаем массив, состоящий из id

let names = users.map(function(current){
  return current.name;
});

console.log(names); // получаем массив, состоящий из name


// for in loop

let user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(x);
}


for(let x in user){
  console.log(`${x} : ${user[x]}`);
}


// Window object - глобальный объект клиентского JS, DOM object - часть Window object

// Window methods/objects/properties

window.console.log(123);

// Alert

// window.alert('Alert');


// Promt

//let input = prompt();
//alert(input);
//console.log(input);


// Confirm

// if (confirm('Are you sure')){
//   console.log('Yes');
// } else {
//   console.log('NO');
// }


// Outer height and width 

val = window.outerHeight;
val = window.outerWidth;
console.log(val)

// Inner height and width 

val = window.innerHeight;
val = window.innerWidth;
console.log(val)


// Scroll points
val = window.scrollY;
val = window.scrollX;

console.log(val)

// Location Object

// Свойство только для чтения Window.location возвращает объект Location с информацией о текущем расположении документа.

val = window.location;
console.log(val);

val = window.location.hostname;
console.log(val);

val = window.location.port;
console.log(val);

val = window.location.href;
console.log(val);

val = window.location.search; // Return the querystring part of a URL.
console.log(val);


// Redirect
// window.location.href = 'https://google.com';

// Reload
// window.location.reload();


// History Object

// window.history.go(-2);


// Navigator Object

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);

//Block Scope With let & const


//Global scope

var a = 1;
let b = 2;
const c = 3;

console.log('Global Scope1: ', a, b, c)

function scope(){
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c)
}

scope();
console.log('Global Scope2: ', a, b, c)

if(true){
  //Block Scope
  var a = 7;
  let b = 8;
  const c = 9;
  console.log('Block Scope: ', a, b, c)
}

console.log('Global Scope3: ', a, b, c)

for(let a = 0; a <10; a++){
  console.log(`Loop: ${a}`);
}

console.log('Global Scope4: ', a, b, c)

for(var a = 0; a <10; a++){
  console.log(`Loop: ${a}`);
}

console.log('Global Scope4: ', a, b, c)
// Область видимости переменной let – блок {...}. Как мы помним, переменная, объявленная через var, видна везде в функции.

// Переменная, объявленная через let,
// видна только в рамках блока {...},
// в котором объявлена.
// Это, в частности, влияет на объявления
// внутри if, while или for.

// Итого
// Переменные let:
// Видны только после объявления и только в текущем блоке.
// Нельзя переобъявлять (в том же блоке).
// При объявлении переменной в цикле for(let …) – она
// видна только в этом цикле. Причём каждой итерации
// соответствует своя переменная let.
// Переменная const – это константа, в остальном – как let.


// DOM Document Object Model

// Tree of nodes/elements created by the browser

// JS can be used to read/write/manipulate to the DOM

// Object Oriented Representation


//





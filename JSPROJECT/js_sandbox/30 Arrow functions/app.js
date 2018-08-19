// Стрелочные функции используют лексический this. В них не нужно использовать переменную self со значением this.

// const sayHello = function(){
//   console.log('Hello');
// }


// Arrow function
const sayHello = () => {
  console.log('Hello');
}

sayHello();

// One line arrow function does not need braces
const sayHello2 = () => console.log('Hello2');
sayHello2();

// One line returns
const sayHello3 = () => 'Hello3';
console.log(sayHello3());

// Return object
const sayHello4 = () => {msg: 'Hello4'}; // undefined, рассматривает {msg: 'Hello'} как тело функции, а не объект
const sayHello5 = () => ({msg: 'Hello5'});
console.log(sayHello4());
console.log(sayHello5());

// Стрелочные функции с параметрами
const sayHello6 = (name, lastName) => console.log(`Hello6 ${name} ${lastName}`);
sayHello6('Brad', 'White');

// Если параметр один, то скобки не нужны
const sayHello7 = name => console.log(`Hello7 ${name}`);
sayHello7('Brad');

// Стрелочные функции и callback
const users = ['Nathan', 'John', 'William'];

// Без стрелочной функции
const nameLengths = users.map(function(name){
  return name.length;
});

console.log(nameLengths);

// Shorter
const nameLengths2 = users.map((name) => {
  return name.length;
});

console.log(nameLengths2);

// Shortest
const nameLengths3 = users.map(name => name.length);

console.log(nameLengths3);
// String
const name1 = 'Jeff';
console.log(name1);

const name2 = new String('Jeff'); //строка как объект, каждый символ с индексом, начиная с 0.

//name2.foo = 'bar';// можем добавлять свойства в объект

console.log(name2);
console.log(typeof name1); //string
console.log(typeof name2); //object

if(name2 === 'Jeff'){
  console.log('Yes');
}else {
  console.log('NO');
}

// Number
const num1 = 5;// number
const num2 = new Number(5);// object
console.log(num2);
console.log(typeof num2);

// Boolean
const bool1 = true; // boolean
const bool2 = new Boolean(true); // object
console.log(bool2);
console.log(typeof bool2);

// Function
const getSum = function(x, y){
  return x + y;
}
console.log(getSum);// 
//
// ƒ (x, y){
//   return x + y;
// }

const getSum2 = new Function('x', 'y', 'return x + y');
console.log(getSum2);//
//
// ƒ anonymous(x,y
// ) {
// return x + y
// }

console.log(getSum(1, 1));
console.log(getSum2(3, 2));

// Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});
console.log(john1);

// Arrays
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = new Array(1, 2, 3, 4, 5, 6, 7);
console.log(arr2);
console.log(typeof arr2);

// Regular Expressions
const re1 = /\w+/;//  /\w+/
const re2 = new RegExp('\w+');//   /w+/   необходимо экранировать слеш

console.log(re2);
console.log(typeof re2);


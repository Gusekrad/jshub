// CommonJS Module Syntax
const person = require('./mymodule1');
console.log(person.name);

// ES2015 Module

// import { person2, sayHello } from './mymodule2';
// console.log(person2.name);
// console.log(sayHello());

// import * as mod from './mymodule2';
// console.log(mod.person2.name);
// console.log(mod.sayHello());

import greeting from './mymodule2';
console.log(greeting);


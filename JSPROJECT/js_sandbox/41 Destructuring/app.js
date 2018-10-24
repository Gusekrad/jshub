// Destructuring Assignment

let a, b;
[a, b] = [100, 200, 300];

console.log(a);
console.log(b);

// Rest pattern // ... spread operator
[a, b, ...rest] = [110, 210, 300, 400, 500, 600, 700];

console.log(a);
console.log(b);
console.log(rest);

({ a, b } = { a: 1001, b: 2002, c: 3003, d: 4004, e: 5005 });
({ a, b, ...rest } = { a: 1001, b: 2002, c: 3003, d: 4004, e: 5005 });

console.log(a, b);
console.log(rest);

// Array Destructuring

let people = ['John', 'Beth', 'Mike'];
let [person1, person2, person3] = people;
console.log(person1, person2, person3);

let couple = [['John', 'Anna'], ['Alex', 'Beth'], ['Mike', 'Olga']];
let [couple1, couple2, couple3] = couple;
console.log(couple1, couple2, couple3); 

// Parse array returned from function
function getPeople(){
  return ['John', 'Beth', 'Mike', 'Alex', 'Beth'];
}

let pers1, pers2, pers3;
[pers1, pers2, pers3, ...rest] = getPeople();
console.log(pers1, pers2, pers3, rest); 

// Object Destructuring

let person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male'
}

// Old ES5
let name = person.name,
    age = person.age,
    city = person.city;
console.log(name, age, city); 

// New ES6 Destructuring
let person22 = {
  name2: 'John Doe',
  age2: 32,
  city2: 'Miami',
  gender2: 'Male',
  sayHello: function(){
    console.log('Hello');
  }
}

let { name2, age2, city2, sayHello } = person22;
console.log(name2, age2, city2); 
sayHello();
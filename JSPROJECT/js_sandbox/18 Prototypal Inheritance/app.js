// Person constructor

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting

Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

 let person1 = new Person('John', 'Doe');

console.log(person1.greeting());
console.log(person1);

// Customer constructor
// call - функция, которая позволяет вызывать другую функцию в текущем контексте
function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName); // есть ещё вариант Person.apply(this, arguments);
  this.phone = phone;
  this.membership = membership;

}

// Inherit the person prototype methods
//Customer.prototype = Object.create(Person.prototype); // Если написать: Customer.prototype = Person.prototype; то переопределённые методы дочернего прототипа переопределят и методы корневого прототипа
Customer.prototype = Person.prototype;
// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;


// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting()); // ошибка, если отдельно не наследовать методы из прототипа Person

console.log(person1.greeting());

const person2 = new Person('Person', '2');
console.log(person2.greeting());
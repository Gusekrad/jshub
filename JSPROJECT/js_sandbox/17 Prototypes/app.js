// Каждый объект в JS имеет прототип. Прототип тоже объект.
// Объект наследует свойства и методы от прототипа.
//

// Object.prototype - прототип объектов


function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob); 
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}


// Calculate age вставляем функцию в прототип

Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name вставляем функцию в прототип
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married вставляем функцию в прототип

Person.prototype.getsMaried = function(newLastName){
  this.lastName = newLastName;
}


const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');
console.log(mary);

console.log(john.calculateAge());
console.log(mary.getFullName());
console.log(mary.getsMaried('Vatson'));
console.log(mary.getFullName());

// Запуск функции, описанной в прототипе Object
console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));// false, так как функция описана не в самом объекте, а в прототипе
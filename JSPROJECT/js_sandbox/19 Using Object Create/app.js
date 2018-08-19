
const personPrototypes = {
  greeting: function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastname){
    this.lastName = newLastname;
  }

}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Whilliams';
mary.age = 30;

console.log(mary);
mary.getsMarried('Thompson');
console.log(mary.greeting());


// Альтернативный синтаксис
const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Bredovich'},
  age: {value: 43}
});

console.log(brad);
console.log(brad.greeting());
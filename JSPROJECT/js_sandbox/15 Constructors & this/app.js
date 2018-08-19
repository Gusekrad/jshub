// Person constructor
function Person() {
  this.name = 'Brad';
  console.log(this);
  console.log('12345');
}

console.log(this); // Window object

// this.alert(1); // = window.alert(1); если вызывать в глобальной области видимости

let brad = new Person();
let john = new Person();
console.log(brad);
console.log(john);


function Person2(name) {
  this.name = name;
}

brad = new Person2('Brad');
john = new Person2('John');

console.log(brad);
console.log(john);



function Person3(name, age) {
  this.name = name;
  this.vozr = age;
}

alex = new Person3('Alex', 53);
console.log(alex);

console.log(alex.vozr);


///////////////////////////////////////////


function Person4(name, dob) {
  this.name = name;
  this.birthday = new Date(dob); 
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
  //  console.log('ageDate = ', ageDate);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  this.mycalculateAge = function(){
    console.log('this birthday = ', this.birthday.getTime());
    
    const now = Date.now();
    console.log('now = ', now);

    birth = this.birthday.getTime();
    console.log('birth = ', birth);

    const age =  Math.floor((((((now - birth)/1000)/60)/60)/24)/365); // высокосный год как учесть?
    console.log('age = ', age);

    return age;
  }

  this.mycalculateAge2 = function(){
    console.log('this birthday = ', this.birthday.getTime());
    
    const now = new Date().getFullYear();
    console.log('now = ', now);

    birth = this.birthday.getFullYear();
    console.log('birth = ', birth);

    const age =  now - birth; // погрешность +/- год)
    console.log('age = ', age);

    return age;
  }
}

let max = new Person4('Max', '09-18-1987');
// console.log(max);

// console.log(max.birthday.getUTCFullYear());
console.log(max.calculateAge());
// console.log(max.mycalculateAge());

//console.log(max.mycalculateAge2());
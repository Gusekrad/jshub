// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1);
console.log(sym2);
console.log(typeof sym2);
console.log(Symbol() === Symbol());
console.log(Symbol('123') === Symbol('123'));
//console.log(`Hello ${sym1}`); ошибка
console.log(`Hello ${String(sym2)}`);
console.log(`Hello ${sym1.toString()}`);

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym3');

const myObj = {
  Name: 'Alan'
};
 
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj);
console.log(myObj[KEY1]);
console.log(myObj[KEY2]);


// Symbols are not enumerable in for...in
for(let i in myObj){
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));
console.log(JSON.stringify(myObj));





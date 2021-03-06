// SETS - Store unique values of any type

let set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); // не добавится новое значение, 100 уже есть
console.log(set1);

let set2 = new Set([1, true, 'string']);
console.log(set2);

// Get count
console.log(set1.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has(50+50));
console.log(set1.has({name: 'John'})); // false

// Delete from set
set1.delete(100);

console.log(set1);

// Iterating through sets

// For..of
for(let item of set1){
  console.log(item);
}

for(let item of set1.keys()){
  console.log(item);
}

for(let item of set1.values()){
  console.log(item);
}

for(let item of set1.entries()){
  console.log(item);
}

// ForEach loop
set1.forEach((value) => {
  console.log(value);
});

// Convert set to array
let setArr = Array.from(set1);
console.log(setArr);

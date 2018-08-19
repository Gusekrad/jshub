// Селекторы выбора нескольких элементов возвращают HTML collection или node list которые могут быть преобразованы в массив

//document.getElementsByClassName

let items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]); // выбор элемента по индексу из HTML collection

items[0].style.color = 'red';
items[3].textContent = 'Hello';

let listItems = document.querySelector('ul').getElementsByClassName('collection-item'); // выбираем только те элементы, которые находятся внутри ul, если этого не сделать, то выберутся все элементы с таким классом на странице

console.log(listItems);


// document.getElementsByTagName

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[3]); // выбор элемента по индексу из HTML collection

lis[4].style.color = 'yellow';
lis[2].textContent = 'Bye';
lis[0].textContent = 'First';
lis[4].textContent = 'Last';

//Convert HTML Collection into array

lis = Array.from(lis); 
console.log('Before reverse ', lis);

lis = lis.reverse();
console.log('After reverse', lis);

lis.forEach(function(current, index){
   console.log(current.className)  
   current.textContent =`${index}: Hello`;
   if(index === 2){
    current.textContent =`${index}: BYGAGA`;
   }   
 });

// document.querySelectorAll возвращает node list, позволяет исппользовать foreach

items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(current, index){
  console.log(current.className)  
  //current.textContent =`${index}: WHAT`;
  if(index === 3){
   current.textContent =`${index}: TRULALA`;
  }   
});

let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(current, index){
  current.style.background = '#ccc';
})

liEven.forEach(function(current, index){
  current.style.background = 'violet';
})

for(let i = 0; i < liEven.length; i++){
 liEven[i].style.background = 'blue' 
}// будет работать и для HTML collection



console.log(items);








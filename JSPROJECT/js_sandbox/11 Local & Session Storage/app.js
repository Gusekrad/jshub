// set local storage item

//localStorage.setItem('name', 'John');
//localStorage.setItem('age', '30');
// set session storage item
//sessionStorage.setItem('name', 'Beth');
 
// remove from storage
//localStorage.removeItem('name');

// get from storage
//let name = localStorage.getItem('name');
//let age = localStorage.getItem('age');

// clear local storage
//localStorage.clear(); 

//console.log(name);
//console.log(age);

document.querySelector('form').addEventListener('submit', function(e){
  let task = document.getElementById('task').value;// содержимое строки ввода на момент нажатия кнопки формы

  let tasks; // переменная для хранения нескольких task в виде массива конвертированного в строку
  
  if(localStorage.getItem('tasks') === null){ //если в лок.хранилище отсутствует элемент с ключом 'tasks'
    tasks = []; // то присваиваем пустой массив переменной для хранения нескольких task
    
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task saved');

  //if(tasks !== null){
    tasks.forEach(function(current){
    console.log(current);
    });
  //}

  e.preventDefault();
});

// let tasks = JSON.parse(localStorage.getItem('tasks'));

// if(tasks !== null){
//   tasks.forEach(function(current){
//   console.log(current);
//   });
// }


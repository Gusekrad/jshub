// DOM Selectors for single Elements

// document.getElementById()

console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// Change styling
console.log(document.getElementById('task-title').style.background = '#333');
console.log(document.getElementById('task-title').style.color = '#fff');
console.log(document.getElementById('task-title').style.padding = '5px');
// console.log(document.getElementById('task-title').style.display = 'none');

// Change content
console.log(document.getElementById('task-title').textContent = 'Task List');
console.log(document.getElementById('task-title').innerText = 'My Task List');
console.log(document.getElementById('task-title').innerHTML = '<span style = "color:red">My Task List</span>');

// использование переменных и констант для сокращения

const taskTitle = document.getElementById('task-title');

taskTitle.textContent = 'Task ListT';
taskTitle.innerText = 'My Task ListT';
taskTitle.innerHTML = '<span style = "color:blue">My Task Listt</span>';

//document.querySelector()

console.log(document.querySelector('#task-title'));// выбор по id

console.log(document.querySelector('.card-title'));// выбор по классу

console.log(document.querySelector('h5'));// выбор по тегу

document.querySelector('li').style.color = 'red'; // только првый найденный элемент будет изменён!!!!!!!!

document.querySelector('ul li').style.color = 'green'; // только првый найденный элемент будет изменён!!!!!!!!

document.querySelector('li:last-child').style.color = 'red'; // выбор последнего элемента в списке

document.querySelector('li:nth-child(3)').style.color = 'yellow'; // выбор произвольного элемента в списке

document.querySelector('li:nth-child(4)').textContent = 'Hello World';


document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
// нельзя выбрать все четные/нечётные элементы списка или дивы с промощью CSS3, так как это селектор одного элемента
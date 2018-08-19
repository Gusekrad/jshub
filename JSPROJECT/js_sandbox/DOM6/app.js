// Replace element

// Create element

let newHeading = document.createElement('h2');

// Add id

newHeading.id = 'task-title';

// New text node

newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading

let oldHeading = document.getElementById('task-title');

// Get Parent для замены нужно сначала найти родительский элемент

let cardAction = document.querySelector('.card-action');

// Replace

cardAction.replaceChild(newHeading, oldHeading );

// REMOVE ELEMENT

let lis = document.querySelectorAll('li');
let list = document.querySelector('ul');

// Remove list item

lis[0].remove();

// Remove child element

list.removeChild(lis[3]);
list.removeChild(document.querySelectorAll('li')[2]);

// Classes & Attributes

let firstLi = document.querySelector('li:first-child').children[0]; // в одну строчку

firstLi = document.querySelector('li:first-child');

let link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[1];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes

val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
val = link.hasAttribute('title');
link.setAttribute('title', 'Google');
link.removeAttribute('title');
console.log(link);







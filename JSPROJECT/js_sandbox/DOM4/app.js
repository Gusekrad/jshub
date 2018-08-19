let val;

let list = document.querySelector('ul.collection');
let listItem = document.querySelector('li.collection-item:first-child');

// Get child nodes (элементы text будут мешать!!!)

val = list.childNodes; // node list
val = list.childNodes[0]; // text
val = list.childNodes[1].nodeName; // LI
val = list.childNodes[0].nodeType; // 3

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype



// Get children element nodes

val = list.children; // HTML collection

val = list.children[0];

list.children[3].textContent = 'Hello';

// Children of children

val = list.children[2].children[0];

list.children[2].children[0].id = 'test-link';

// First & last child

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount; // считает сколько вложенных элементов 

// Get parent node

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling

val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling

val = listItem.previousSibling;
val = listItem.previousElementSibling;
//val = listItem.previousElementSibling.previousElementSibling;
console.log(val);


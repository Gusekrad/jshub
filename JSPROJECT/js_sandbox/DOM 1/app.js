let val;

val = document;
val = document.all;
val = document.all[0]; // html element
val = document.all[1]; // head
val = document.all[2]; // meta
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// Selection without selectors
//NOT recomended but possible

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[3];
val = document.links[3].id;
val = document.links[3].className;
val = document.links[3].classList;
val = document.links[3].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2];
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

// не будет работать:
// scripts.forEach(function(current) {
//   console.log(current);
// });
//

//сначала нужно конвертировать в массив:
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(current) {
  console.log(current);
});

scriptsArr.forEach(function(current) {
  console.log(current.getAttribute('src'));
});

console.log(val);
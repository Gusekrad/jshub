// Event Listeners and The Event Object

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello');

//   e.preventDefault();// или можно в html поместить ссылку на #
// });



document.querySelector('.clear-tasks').addEventListener('click', onClick);
 
function onClick(e){
  console.log('Clicked');
  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  
  e.target.innerText = 'Hello';

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;


  console.log(val);

}


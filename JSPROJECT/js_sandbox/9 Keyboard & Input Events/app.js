let form = document.querySelector('form');
let taskInput = document.getElementById('task');
let heading = document.querySelector('h5');
let select = document.querySelector('select');
// Clear input 
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
//taskInput.addEventListener('keydown', runEvent);

// Keyup
// taskInput.addEventListener('keyup', runEvent);

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Input
//taskInput.addEventListener('input', runEvent);

// Change
select.addEventListener('change', runEvent);




function runEvent(e){
  console.log(`Event Type: ${e.type}`)
  console.log(e.target.value);

  heading.innerText = e.target.value;
  // Get input value
  //console.log(taskInput.value);

  //e.preventDefault();

}

console.log(taskInput);
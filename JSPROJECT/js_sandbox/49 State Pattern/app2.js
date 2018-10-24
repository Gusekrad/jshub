

// Home State
const homeState = function(){
  document.querySelector('#heading').textContent = 'Home';
  document.querySelector('#content').innerHTML = `
  <p>This is the Home page</p> 
  `;
};

// About State
const aboutState = function(){
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is the About page</p>  
  `;
};

// Contact State
const contactState = function(){
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
  <p>This is the Contact page</p> 
  `;
};



// Init the first state

let state;
// UI Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  state = new homeState

  e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
  state = new aboutState;

  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
  state = new contactState;

  e.preventDefault();
});

//console.log(page);

//let grisha = new aboutState;
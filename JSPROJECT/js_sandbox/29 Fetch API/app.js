document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button1').addEventListener('click', getTextArrow);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);


// Get local text file data
function getText(){
  fetch('test.txt')
    .then(function(res){
    //console.log(res.text());  
    return res.text();
    })
    .then(function(data){   
      console.log(data);
      document.getElementById('output').innerHTML += data;
    })
    .catch(function(err){ // это не работает, но в уроке так
      console.log('ERROR: ', err);
    });
}

// Get local text file data with ARROW FUNCTIONS
function getTextArrow(){
  fetch('test.txt')
    .then(res => res.text())
    .then(data => {document.getElementById('output').innerHTML += `Arrow: ${data}`; 
    console.log(data);
    })
    .catch(err => console.log(`My ERRoR: ${err}`)); // не работает, но в видео так
   
}

//Get local JSON data
function getJson(){
  fetch('posts.json')
    .then(function(res){
    //console.log(res.json());  
    return res.json();
    })
    .then(function(data){
      //console.log(data);
      let output = '';
      data.forEach(function(post){
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){ // это не работает, но в уроке так
      console.log('ERROR: ', err);
    });
}

//Get from external API
function getExternal(){
  fetch('https://api.github.com/users')
    .then(function(res){
    //console.log(res.json());  
    return res.json();
    })
    .then(function(data){
      //console.log(data);
      let output = '';
      data.forEach(function(user){
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){ // это не работает, но в уроке так
      console.log('ERROR: ', err);
    });
}
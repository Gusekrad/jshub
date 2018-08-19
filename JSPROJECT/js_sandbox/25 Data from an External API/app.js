document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
  console.log('get jokes');
  const number = document.querySelector('input[type="number"]').value;
  console.log(number);

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function(){
    if(this.status === 200){
      const responce = JSON.parse(this.responseText);

      let output = '';

      if(responce.type === 'success'){
        responce.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      }else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
      console.log(responce);

    }
  }

  xhr.send();

  e.preventDefault();
}
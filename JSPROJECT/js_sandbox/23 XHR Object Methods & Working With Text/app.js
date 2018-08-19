document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  //Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true); // true включает асинхронность
  //console.log('Readystate1 ', xhr.readyState);

  //xhr.onload = function(){
  //  if(this.status === 200){
  //    console.log(this.responseText);
  //  }
  //}

  // .onreadystatechange требует проверки readyState Values
  // xhr.onreadystatechange = function(){
  //   console.log('Readystate2 ', xhr.readyState); 
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  // Optional - Used for spinners/loaders выполняется на стадии 3? 3: processinng request 
  xhr.onprogress = function(){
    console.log('Readystate OP: ', xhr.readyState)
  }

  xhr.onload = function(){
   console.log('Readystate3 ', xhr.readyState); 
   if(this.status === 200){
     console.log(this.responseText);
     document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
   }
  }

  xhr.onerror = function(){
    console.log('Request error...');

  }

  xhr.send();
  //readyState Values
  // 0: request is not initialized
  // 1: server connection established
  // 2: request received
  // 3: processinng request 
  // 4: request finished and response is ready


  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}
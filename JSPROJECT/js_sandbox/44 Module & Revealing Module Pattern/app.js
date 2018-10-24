// в ES6 появились модули, и мы можем использовать отдельные файлы для экспорта модулей, которые являются разными частями кода, и импортировать их в новый файл. НО это не подерживается браузерами, нужно использовать компилятор Babel и загрузчик модулей Web Pack.

// Module Pattern

// Basic structure

// (function(){
//   // Declare private vars and functions
//   return {
//     // Declare public var and functions
//   }
// })();

// Standard module pattern
const UICtrl = (function(){
  let text = 'Hello World';

  const changeText = function(){
    const element = document.querySelector('h1');
    element.textContent = text;
  } 

  return {
    callChangeText: function(){
      changeText();
      console.log(text);
    },
    
    sayHello: function(){
      console.log('Hello');
    }

  }
})();

UICtrl.callChangeText();
UICtrl.sayHello();

// Revealing module pattern
const ItemCtrl = (function(){
  let data = [];

  function add(item){
    data.push(item);
    console.log('Item Added....')
  }

  function get(id){
    return data.find(item => {
      //console.log(item.id);
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }  
})();


ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});

console.log(ItemCtrl.get(2));







function get2(id){
  return data.find(item => {
    console.log(item.id);
    return item.id === id;
  });
}




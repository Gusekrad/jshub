const user = {email: 'jdoe@gmail.com'};

try{
  // Produce a ReferenceError
  //myFunction();

  // Produce a Typeerror
  //null.myFunction();

  // Will produce SyntaxError
  //eval('Hello World');

  // Will produce a URIError
  //decodeURIComponent('%');

  if(!user.name){
    //throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
}catch(e){
  console.log(`User Error: ${e.message}`);
  console.log(e);
  console.log(e.message);
  console.log(e.name);
  console.log(e instanceof TypeError);
  console.log(e instanceof ReferenceError);
  console.log(`${e.name}'ITS NULL STUPID!!!'`);
}finally {
  console.log('Finally runs reguardless of result...');
}

console.log('Program continues...');
 
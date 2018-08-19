const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts');

// const posts = http.get('https://jsonplaceholder.typicode.com/posts');


/////////////////////////////////////// GET POSTS
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//   if(err){
//     console.log(err);
//   }else {
//     console.log(posts);
//   }
// });
////////////////////////////////////////


/////////////////////////////////////// GET SINGLE POST
// http.get('https://jsonplaceholder.typicode.com/posts/5', function(err, post){
//   if(err){
//     console.log(err);
//   }else {
//     console.log(post);
//   }
// });
///////////////////////////////////////


/////////////////////////////////////// POST
// Create data
const data = {
  title: 'My Custom Post',
  body: 'This is my custom post'
};

// // Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err){
//     console.log(err);
//   }else {
//     console.log(post);
//   }    
// });
///////////////////////////////////////


/////////////////////////////////////// PUT 
// Create data


// Create post
http.put('https://jsonplaceholder.typicode.com/posts/100', data, function(err, post) {
  if(err){
    console.log(err);
  }else {
    console.log(post);
  }    
});
///////////////////////////////////////
  

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err){
    console.log(err);
  }else {
    console.log(response);
  }    
});
///////////////////////////////////////









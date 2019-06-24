const http = new easyHTTP;

//get users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe.gmail.com'
}

// //update post
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//put post
http.put('https://jsonplaceholder.typicode.com/users/1', data)
.then(data => console.log(data))
.catch(err => console.log(err));

//delete post
http.delete('https://jsonplaceholder.typicode.com/users/1')
.then(data => console.log(data))
.catch(err => console.log(err));

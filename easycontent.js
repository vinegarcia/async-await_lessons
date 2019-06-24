const http = new easyHttp;

//Get users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(error => console.log(error));

//post user
const data = {
    name: 'John Doe',
    username: 'john',
    email: 'jdoe@gmail.com'
}

//create a user
http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(error => console.log(error));

http.put('https://jsonplaceholder.typicode.com/users/1', data)
.then(data => console.log(data))
.catch(err => console.log(err));

//delete post
http.delete('https://jsonplaceholder.typicode.com/users/1')
.then(data => console.log(data))
.catch(err => console.log(err));
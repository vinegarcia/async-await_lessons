//sample of normal function without async await

//  async function myFunction(){
//         return 'Hello'
// }

// console.log(myFunction());

// async function myFunction(){
//     return 'Hello1';
// }

// myFunction()
// .then(response => console.log(response));

async function myFunction(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('hello'), 2000)
    });

    const error = false;
    if(!error){
        const res = await promise; //wait until promise is resolved
        return res;
    } else {
        await Promise.reject(new Error('Something went wrong'));
    }
    
}
myFunction().then(res => console.log(res))
.catch(err => console.log(err));

async function getUsers(){
    //await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    //only proceed once its resolved
    const data = await response.json();

    //only proceed once second promise is resolved
    return data;
}
getUsers()
.then(users => console.log(users))
.then(err => console.log(err));


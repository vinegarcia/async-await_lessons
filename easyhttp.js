//library es6

class easyHTTP {
    //make an http GET request
    // get(url) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url)
    //         .then(res => res.json())
    //         .then(data => resolve(data))
    //         .catch(err => reject(err));
    //     });
    // }

    // //make an http post request
    // post(url, data) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json' 
    //             }, body: JSON.stringify(data)
    //         })
    //             .then(res => res.json())
    //             .then(data => resolve(data))
    //             .catch(err => reject(err));
    //     });
    // }

        put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                        'Content-type': 'application/json'
                }, body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                        'Content-type': 'application/json'
                }, body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(() => resolve('rESOURCE DELETED'))
                .catch(err => reject(err));
        });
    }
}
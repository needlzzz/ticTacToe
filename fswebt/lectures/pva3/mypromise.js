registerUser(userData, (error, user) => { 
    if (error) {
        // handle error
    } else {
        // do something with new user 
    }
});

function registerUserPromise(userData) {
    return new Promise((resolve, reject) => {
        registerUser(userData, (error, user) => { 
            if (error) {
                reject();
            } else {
                resolve(user);
            }
        });
    });
}

registerUserPromise(userData)
  .then(user => {
      // do something with new user 
  })
  .catch(error => {
      // handle error
  })

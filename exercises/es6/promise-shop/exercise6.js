var promise = Promise.reject(new Error('SECRET VALUE'));


promise.catch( err => console.error(err.message) )
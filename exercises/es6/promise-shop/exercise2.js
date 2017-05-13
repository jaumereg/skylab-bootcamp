var promise = new Promise(function(fulfill, reject) {
	
	setTimeout(function (){
		fulfill('FULFILLED!')
	} ,300)
	
    // Your solution here


promise
	.then( fulfill => console.log(fulfill))
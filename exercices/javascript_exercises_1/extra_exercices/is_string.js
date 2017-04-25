// isString

// Define a function called isString that receives a value and return true if the value received is a string

function isString (userInput) {
  if (typeof userInput === 'string') return true
  else return false
}

isString('27') // returns true

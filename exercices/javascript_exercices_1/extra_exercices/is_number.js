// isNumber

// Define a function called isNumber that receives a value and return true if the value received is a number

function isNumber (userInput) {
  if (typeof userInput === 'number') return true
  else return false
}

isNumber('27') // returns false

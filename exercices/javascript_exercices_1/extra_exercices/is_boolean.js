// isBoolean

// Define a function called isBoolean that receives a value and return true if the value received is a boolean

function isBoolean (userInput) {
  if (typeof userInput === 'boolean') return true
  else return false
}

isBoolean(false) // returns true

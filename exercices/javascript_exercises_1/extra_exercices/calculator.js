// Calculator

// Define a function called calculator that receives an operation and two numbers
// and returns the result of the operation applied to the values passed as parameters

function calculator (operation, n1, n2) {
  if (operation === 'suma') return n1 + n2
  else if (operation === 'resta') return n1 - n2
  else if (operation === 'multiplicacion') return n1 * n2
  else if (operation === 'division') return n1 / n2
  else console.log('error')
}

calculator('suma', 2, 7)

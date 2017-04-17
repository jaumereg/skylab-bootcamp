// Calculator Plus

// Define a function called calculator that receives an operation
// and several numbers (can be 2 or 10 or whatever) returns the
// result of the operation applied to the values passed as parameters

function calculatorPlus () {
  var operation = arguments[0]
  var result = arguments[1]
  var totalElements = arguments.length
  var operand

  for (var i = 2; i < totalElements; i++) {
    operand = arguments[i]
    if (operation === 'suma') result += operand
    if (operation === 'resta') result -= operand
    if (operation === 'multiplicacion') result *= operand
    if (operation === 'division') result /= operand
    else return console.log('error')
  }
  return result
}

calculatorPlus('suma', 2, 7, 1, 1)

// app.js

var moment = require('moment')
var sum = require('./operations/sum.js')
var subs = require('./operations/substraction.js')
var mult = require('./operations/multiplication.js')
var div = require('./operations/division.js')
var results = require('./results.js')

var operand1 = +process.argv[2]
var operand2 = +process.argv[3]

console.log('Username: ' + process.env.USERNAME)
console.log('Today is: ' + moment().format('MMMM Do YYYY, h:mm:ss a'));
results('sum', operand1, operand2, sum(operand1, operand2))
results('subs', operand1, operand2, subs(operand1, operand2))
results('mult', operand1, operand2, mult(operand1, operand2))
results('div', operand1, operand2, div(operand1, operand2))


// ADDING NEW ENVIRONMENT VARIABLE
// set MY_NAME=James&&node app.js 2 7
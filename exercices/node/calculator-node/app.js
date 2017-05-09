// app.js

var moment = require ('moment')
var sum = require('./operations/sum.js')
var subs = require('./operations/substraction.js')
var mult = require('./operations/multiplication.js')
var div = require('./operations/division.js')
var a = require('./operands.js').operand1
var b = require('./operands.js').operand2
var results = require('./results.js')

console.log('Today is: ' + moment().format('LLLL'));
results('sum', a, b, sum(a, b))
results('subs', a, b, subs(a, b))
results('mult', a, b, mult(a, b))
results('div', a, b, div(a, b))
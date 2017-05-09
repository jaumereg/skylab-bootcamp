function sum (n1, n2) {
	result = n1 + n2
	console.log('The sum of ' + n1 + ' & ' + n2 + ' is: ' + result)
}

function mult (n1, n2) {
	result = n1 * n2
	console.log('The multiplication of ' + n1 + ' & ' + n2 + ' is: ' + result)
}

module.exports.sum = sum
module.exports.mult = mult

//OR...
//
// module.exports = {
// 	sum: sum,
// 	mult: mult
// }
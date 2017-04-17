// STUDY SESSION 1
// NUMBERS

// enunciado a)
var number = 10.34;

console.log('It\'s ' + number + ' of morning');

// enunciado b)
var stringNumber = number.toString();

function aproxTime (stringNumber) {
	for (var i = 0; i < stringNumber.length; i++) {
		if (stringNumber[i] === '.') {
			console.log('It\'s around ' + stringNumber.substring(0,i) + ' of morning');
		}
	}
}

aproxTime(stringNumber);

// enunciado c)
console.log(parseInt(number));

// or...
console.log(Math.floor(number));

// enunciado d)

function sumText (n1, n2) {
	console.log('The sum of ' + n1 + '+' + n2 + ' is ' + (n1 + n2));
}

sumText(7, 2); // un poco chapuza esto?

function sum (n1, n2) {
	return (n1 + n2);
}

// enunciado d1)
function restText (n1, n2) {
	console.log ('The sum and rest of ' + n1 + ' and ' + n2 + ' is ' + sum(7, 2) + ' and ' + (n1 - n2));
}

restText (7, 2); // un poco chapuza esto?

function rest (n1, n2) {
	return (n1 - n2);
}

// enunciado d2)
function mult (n1, n2) {
	return (n1 * n2);
}

console.log(sum(7, 2) + ', ' + rest(7, 2) + ' and ' + mult(7, 2));

// enunciado d3)
function div (n1, n2) {
	return (n1 / n2);
}

console.log(sum(7, 2) + ', ' + rest(7, 2) + ', ' + mult(7, 2) + ' and ' + div(7, 2));

// enunciado d4)
console.log(mult(10, 'hour'));  // resultado NaN

// enunciado e)
function mult (n1, n2) {
	if (isNaN(n1) || isNaN(n2)) {
    console.log('You can\'t do this operation!');
  } else {
  return (n1 * n2);
  }
}

console.log(mult (10, 'hour'));

// enunciado f)
console.log(10);  // se resuelve solo
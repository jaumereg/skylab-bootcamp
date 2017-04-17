// STUDY SESSION 1
// STRINGS

// enunciado a)
var myName = 'Jaume';

function showNumberOfLetters (myName) {
	console.log('My name has ' + myName.length + ' letters');
}

showNumberOfLetters(myName);

// enunciado b)
var myString = 'Jaume Regas';

function showLastNamePosition (myString) {
	for (var i = 0; i < myString.length; i++) {
		if (myString[i] === ' ') {
			console.log('Your first last name is on position ' + (i + 1));
		}
	}
}

showLastNamePosition(myString);

// or...

function showLastNamePositionTwo (myString) {
	for (var i = 0; i < myString.length; i++) {
		if (myString[i] === 'R') {
			console.log('Your first last name is on position ' + i);
		}
	}
}

showLastNamePositionTwo(myString);

// enunciado c

function onlyName (myString) {
	for (var i = 0; i < myString.length; i++) {
		if (myString[i] === ' ') {
			console.log('My name is ' + myString.substring(0,i));
		}
	}
}

onlyName(myString);

// enunciado d
function onlyLastName (myString) {
	for (var i = 0; i < myString.length; i++) {
		if (myString[i] === ' ') {
			console.log('My lastname is ' + myString.substring(i + 1));
		}
	}
}

onlyLastName(myString);

// enunciado e
function helloMr (myString) {
	for (var i = 0; i < myString.length; i++) {
		if (myString[i] === ' ') {
			console.log('Hello, Mr. ' + myString.substring(i + 1));
		}
	}
}

helloMr(myString);

// enunciado f
function upperCase (myString) {
	for (var i = 0; i < myString.length; i++) {
		if (myString[i] === ' ') {
			console.log(myString.substring(i + 1).toUpperCase());
		}
	}
}

upperCase(myString);

// enunciado g
var something = myName + ' is awesome';

console.log(something);

// enunciado h
function firstLetters (myString) {
	for (var i = 0; i < myString.length; i++) {
		if (myString[i] === ' ') {
			console.log(myString.charAt() + myString.charAt(i + 1));
		}
	}
}

firstLetters(myString);

// enunciado i
function myNameUpper (myName) {
	console.log(myName.toUpperCase().split('').join('/'));
}

myNameUpper(myName);

// enunciado j
function myLastNameUpper (myString) {
	for (var i = 0; i < myString.length; i++) {
		if (myString[i] === ' ') {
			console.log(myString.toUpperCase().substring(i + 1).split('').join('|'));
		}
	}
}

myLastNameUpper(myString);
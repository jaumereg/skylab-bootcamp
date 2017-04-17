// 1. CALCULATOR

var result = [];

confirm("You are going to calculate some results of two numbers, press Accept to continue");

var n1 = parseInt(prompt("Introduce the first number"));
var n2 = parseInt(prompt("Introduce the second number")); 

function calculator (n1, n2) {
	if (isNaN(n1) || isNaN(n2)) {
    	console.log('You can\'t do this operation!');
  	} else {
    	function resultSum () {
        result.push (n1 + ' + ' + n2 + ' = ' + (n1 + n2).toFixed(3));
      }
      
      function resultRest () {
        result.push (n1 + ' - ' + n2 + ' = ' + (n1 - n2).toFixed(3));
      }
      
      function resultMult () {
        result.push (n1 + ' * ' + n2 + ' = ' + (n1 * n2).toFixed(3));
      }
      
      function resultDiv () {
        result.push (n1 + ' / ' + n2 + ' = ' + (n1 / n2).toFixed(3));
      }
      
      function resultSqrt () {
        result.push ('Square root of ' + n1 + ' = ' + Math.sqrt(n1).toFixed(3));
        result.push ('Square root of ' + n2 + ' = ' + Math.sqrt(n2).toFixed(3));
      }
      
      resultSum();
      resultRest();
      resultMult();
      resultDiv();
      resultSqrt();
      
      console.log(result);   
  	}
}

calculator (n1, n2);

var userAnswer = prompt("Do you want to do another calculation?");

if (userAnswer === "yes") {
  var n1 = parseInt(prompt("Introduce the first number"));
  var n2 = parseInt(prompt("Introduce the second number")); 
  calculator (n1, n2);
}
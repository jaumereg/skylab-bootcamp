// SS3 MINIPROJECT
// BINGO GAME
// Jaume Regas

var balls = [];
var bingoCardNumbers = [];
var completedRow = false;
var tries = [];

var bingoCard = [
    {number: null, matched: false, repeated: false},
    {number: null, matched: false, repeated: false},
    {number: null, matched: false, repeated: false},
    {number: null, matched: false, repeated: false},
    {number: null, matched: false, repeated: false},
    //next line
    {number: null, matched: false, repeated: false},
    {number: null, matched: false, repeated: false},
    {number: null, matched: false, repeated: false},
    {number: null, matched: false, repeated: false},
    {number: null, matched: false, repeated: false},
    //next line
    {number: null, matched: false, repeated: false},
    {number: null, matched: false, repeated: false},
    {number: null, matched: false, repeated: false},
    {number: null, matched: false, repeated: false},
    {number: null, matched: false, repeated: false}
];

// CARD GENERATOR
function bingoCardGenerator () {
  //Empties the bingo card
  bingoCardNumbers = [];
 
  // Generates random number
	for (var key in bingoCard) {
    bingoCard[key].number = Math.floor(Math.random() * 90) + 1;
    
    // Avoids duplicates
    for (i = key - 1; i >= 0; i--) {
      while (bingoCard[key].number === bingoCard[i].number) {
        bingoCard[key].number = Math.floor(Math.random() * 90) + 1;
      }
    }
    // Creates array from a group of property values
    bingoCardNumbers.push(bingoCard[key].number);
  }
  // Shows to the console the bingo card distributed in five columns by three rows
  for (var i = 0; i < bingoCardNumbers.length; i += 5) {
    console.log(bingoCardNumbers.slice(i, i + 5));	
	}
  // Shows to the user the current card and offers a new one
  var reroll = prompt("Your card: [ " + bingoCardNumbers.slice(0, 5).join(', ') + ' ] [ ' + bingoCardNumbers.slice(5, 10).join(', ') + ' ] [ ' + bingoCardNumbers.slice(10, 15).join(', ') + " ] Do you want to play with another card? (y/n)");
  if (reroll === "y") {
  	bingoCardGenerator();
	} else {
  confirm("Good luck!");
  }
}

// BINGO BALL GENERATOR
function bingoBall () {
  
  var numMatched = 0;
   
	// Asks to user his name
	var userName = prompt("Introduce your name");
	// Salutes
	confirm ("Hello " + userName + ", welcome to Skylab\'s Bingo!");
  // Generates randomly a bingo card
  bingoCardGenerator();
    
  // While user is not winning...
  while (numMatched < bingoCard.length) {
    
    // Creates a random ball number
    var randomBallNumber = Math.floor(Math.random() * 90) + 1;
    // Creates an array of ball numbers    
  	balls.push(randomBallNumber);
    removeDuplicates();
    
    for (var key in bingoCard) {
      // Detects matched numbers
      if ((randomBallNumber === bingoCard[key].number) && (bingoCard[key].repeated === false)) {
      	bingoCard[key].matched = true;
        bingoCard[key].repeated = true;
      	numMatched++; 
        confirm(bingoCard[key].number + ' matched!');
        // Converts the matched number to X in the current bingo card
        bingoCardNumbers[key] = "X";
        // Detects if the first row is matched
        var firstRow = 0;        
        for (var i = 0; i <= 4; i ++) {
    			if (bingoCardNumbers[i] === "X") {
            firstRow++;
          }
          if ((firstRow === 5) && !completedRow) {
            completedRow = true;
            confirm("You've finished the first row!");
          }
				}
        // Detects if the second row is matched
        var secondRow = 0;
        for (var i = 5; i <= 9; i ++) {
    			if (bingoCardNumbers[i] === "X") {
            secondRow++;
          }
          if ((secondRow === 5) && !completedRow) {
            completedRow = true; 
            confirm("You've finished the second row!");
          }
				}
        // Detects if the third row is matched
        var thirdRow = 0;
        for (var i = 10; i <= 14; i ++) {
    			if (bingoCardNumbers[i] === "X") {
            thirdRow++;
          }
          if ((thirdRow === 5) && !completedRow) {
            completedRow = true;
            confirm("You've finished the third row!");
          }
				}
        // Shows to user the matched number, the current card, and offers him the possibility to continue playing or not        
        var continueMatched = prompt(bingoCard[key].number + ' matched! [ ' + bingoCardNumbers.slice(0, 5).join(', ') + ' ] [ ' + bingoCardNumbers.slice(5, 10).join(', ') + ' ] [ ' + bingoCardNumbers.slice(10, 15).join(', ') + ' ]  This is your current card, do you want to continue? (y/n)');
        if ((continueMatched === "y") || (continueMatched === '')) {
  				break;
				} else {  				
          playUserAgain();
          return;
 		  	}
        // Shows to the console the bingo card distributed in five columns by three rows (with matched numbers represented as a X) 
        for (var i = 0; i < bingoCardNumbers.length; i += 5) {
    			console.log(bingoCardNumbers.slice(i, i + 5));          
				}
        
      }
  	}
    // If user wins
    if (numMatched === bingoCard.length){
      // Notifies the user that he has won (also shows the number of balls needed to win) and offers him the possibility to play again or not  
      var playAgain = prompt("You won at Skylab's Bingo with " + tries.length + " tries! Do you want to play again? (y/n)");
  		if ((playAgain === "y") || (playAgain === '')) {
        resetValues();
        bingoBall();
			} else {
  		confirm("Thank you for playing at Skylab's Bingo, we hope to see you soon!");
        return;
 		  }
    }
  }
}

function playUserAgain () {
   var playAgain = prompt("You gave up at Skylab's Bingo with " + tries.length + " tries! Do you want to try again? (y/n)");
  		if ((playAgain === "y") || (playAgain === '')) {
        resetValues();
        bingoBall();
			} else {
  		confirm("Thank you for playing at Skylab's Bingo, we hope to see you soon!");
        return;
 		  }
}
// Removes duplicate balls
function removeDuplicates (){
    
  for (var i = 0; i < balls.length; i++) {
      if (tries.indexOf(balls[i]) === -1) {
        	tries.push(balls[i]);
          // Shows the current random number ball
        	confirm("Number " + tries[tries.length - 1]);
      }
  }
}

function resetValues () {
	randomBallNumber = 0;
	balls = [];
	numMatched = 0;
	completedRow = false;
	tries = [];
  // Resets the values of bingoCard object
  for (var key in bingoCard) {
    bingoCard[key].number = null;
  	bingoCard[key].matched = false;
    bingoCard[key].repeated = false;
  }  
}

bingoBall();
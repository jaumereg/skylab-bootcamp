// ROCK, PAPER, SCISSORS

var choice = ["rock", "paper", "scissors"];

confirm('Welcome to RPS game, press Accept to continue');
var compChoice;

var userPoints = 0;
var compPoints = 0;

function play () {
   
	var userChoice = prompt('What do you choose? Rock, Paper, or Scissors?');
   
  if ((userPoints < 3) && (compPoints < 3)) {

   	var compChoice = choice[Math.floor(Math.random() * 3)];

    if (userChoice === "rock") {
  		if (compChoice === "scissors") {
     		console.log("You win!");
     		userPoints++;
     		play();
    	} else if (compChoice === "paper") {
			console.log("You lose!");
      		compPoints++;
      		play();
  		} else {
      		console.log("It\'s a tie!");
      		play ();
    	}
	}

  	if (userChoice === "paper") {
    	if (compChoice === "rock") {
      		console.log("You win!");
      		userPoints++;
      		play();
    	} else if (compChoice === "scissors") {
      		console.log("You lose!");
      		compPoints++;
      		play();
    	} else {
      		console.log("It\'s a tie!");
      		play ();
    	}
  	}

  	if (userChoice === "scissors") {
    	if (compChoice === "paper") {
      		console.log("You win!");
      		userPoints++;
      		play();
    	} else if (compChoice === "rock") {
      		console.log("You lose!");
      		compPoints++;
      		play();
    	} else {
      		console.log("It\'s a tie!");
      		play ();
    	}
  	} 

  	if ((userChoice !== "paper") && (userChoice !== "rock") && (userChoice !== "scissors")) {
    	var userChoice = prompt("Please choose a valid option! What do you choose? Rock, Paper, or Scissors?");
    	play ();
  	}

  } else if (userPoints === 3) {
    	console.log ("You won the tournament!!!");
  } else {
    	console.log ("You lost the tournament...");
  }
}

play();
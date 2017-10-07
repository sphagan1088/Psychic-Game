// Put the following text on your
// page:
// Guess what letter I'm thinking of
// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter 
//correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed.
// Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the 
//game over again (without refreshing the page).
// When the player loses, increase the Losses counter and
// restart the game without a page refresh (just like when the user 
//wins).

//list of variables
var letterGuess 
var wins = 0;
var losses = 0;
var guessesLeft = 10;  
var guessesSoFar 

//array of letters 
var letter = 
	["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//user presses a key to make a guess
document.onkeyup = function(event){
var letterGuess = event.key.toLowerCase();
alert(letterGuess);

}

// computer selects random letter 
var computerLetter = letter[Math.floor(Math.random()*letter.length)];
console.log(computerLetter);

//if statments for letterGuess


	if ((letterGuess) === (computerLetter)){
		wins++
	}

	if ((letterGuess) != (computerLetter)) {
		guessesLeft--
	}

	if ((guessesLeft)===  0 ) {
		losses++
	}





	// add html to page 

	var html = "<p> Guess What Letter I'm Thinking Of<p>" + 
	"<p> Wins:" + wins + "</p>" + 
	"<p> Losses:" + losses + "</p>" +
	"<p> Guesses Left:" + guessesLeft + "</p>"
	"<p> Guesses so far:" + guessesSoFar + "</p>";

	document.querySelector("#game").innerHTML = html;

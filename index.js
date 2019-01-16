//this is on the right track

//take user input for their guess
let guess = prompt("guess a word, homie").toLowerCase();

//where we'll store the correct guesses
let correctGuesses = [];

//obvi
let wrongGuesses = [];

//our response to whether the item can pass
let response = false;

//function to turn guess into array to check for repeating letters
let guessSplit = function(){

//convert string to array	
  let arr = guess.split("");
  
//loop through array
  for(let i = 0; i < arr.length; i++){
//compare one letter with the next
    if (arr[i] === arr[i+1]){
//set response to true because there has been a repeating letter
      let response = true;
//push a successful guess into correctGuesses array
      	if (response === true){
     		correctGuesses.push(guess);
      		console.log(correctGuesses);
  		} else {
//taunt them for incorrect guesses
  			alert("INCORRECTAMUNDO");
  		}
    } 
    
  }
}

guessSplit();

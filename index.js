const check = function(){ 
  let score = 0;
  let correctGuesses = [];
  let incorrectGuesses = [];

  let input = document.getElementById("input").value;

  let wordArr = input.split("");

  let doubleLetter = false;

    for (let i = 0; i < wordArr.length - 1; i++){
       if (wordArr[i] === wordArr[i+1]){
          doubleLetter = true;
          alert("You have guessed correctly; you may pass.");
          correctGuesses.push(input);
          score++;
        console.log(`score: ${score} & ${correctGuesses}`)
       }
     }
     if(!doubleLetter) {
        alert("I will not accept this offering. Try again."); 
        wrongGuesses.push(input);
        console.log(`score: ${score} & ${incorrectGuesses}`)
     }
}
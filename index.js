const check = function(){ 
  
  let input = document.getElementById("input").value;

  let wordArr = input.split("");
    console.log(`ur word array is ${wordArr}`);

  let doubleLetter = false;

    for (let i = 0; i < wordArr.length - 1; i++){
       if (wordArr[i] === wordArr[i+1]){
          doubleLetter = true;
          alert("lucky guess muthafucka");
       }
     }
     if(!doubleLetter) {
        alert("fuck dat shit try again BIOTCH"); 
     }
}
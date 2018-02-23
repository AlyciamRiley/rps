//define global variables
var userChoice = "";
var computerChoices = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;
var computerGuess = "";

//user chooses r, p, or s
document.onkeyup = function() {
  userChoice = String.fromCharCode(event.keyCode).toLowerCase();
  if (userChoice === "r" || userChoice === "p" || userChoice === "s") {
    //computer generates random letter
    computerGuess =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
  } else {
    alert("Pleae choose r, p, or s");
  }
  //compare user choice and computer choice
  if (userChoice === "r" && computerGuess === "p") {
    alert("You lose!");
    losses++;
  }

  if (userChoice === "r" && computerGuess === "s") {
    alert("You win!");
    wins++;
  }

  if (userChoice === "p" && computerGuess === "r") {
    alert("You win!");
    wins++;
  }

  if (userChoice === "p" && computerGuess === "s") {
    alert("You lose!");
    losses++;
  }

  if (userChoice === "s" && computerGuess === "r") {
    alert("You lose!");
    losses++;
  }

  if (userChoice === "s" && computerGuess === "p") {
    alert("You win!");
    wins++;
  }

  if (userChoice === computerGuess) {
    alert("You tie!");
    ties++;
  }
  console.log(userChoice);
  document.getElementById('userChoice').innerHTML = userChoice; 

  document.getElementById('computerGuess').innerHTML = computerGuess; 

  document.getElementById('wins').innerHTML = wins; 

  document.getElementById('losses').innerHTML = losses; 

  document.getElementById('ties').innerHTML = ties; 

};



//upate gui



//rerun game

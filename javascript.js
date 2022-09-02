function getComputerChoice(){
  // randomly return either 'Rock', 'Paper', or 'scissors'.
  let choice = Math.random();
  if (choice <= 1/3){
    return "Rock";
  }else if (choice <= 2/3){
    return "Paper";
  }else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection){
  // return every single round result
  let playerPart1 = playerSelection.toUpperCase().charAt(0);
  let playerPart2 = playerSelection.toLowerCase().slice(1);
  let player = playerPart1 + playerPart2;

  if (player==="Rock" && computerSelection==="Scissors" || player==="Paper" && computerSelection==="Rock" || player==="Scissors" && computerSelection==="Paper"){
    alert(`You Win! Your ${player} beats ${computerSelection}!`);
    return "WIN";
  }else if (player===computerSelection){
    alert(`Tie! Both choose same object, ${player}!`);
    return "TIE";
  }else {
    alert(`You Lose! Your ${player} is beaten by ${computerSelection}!`);
    return "LOSE";
  }
}

function game(){
  // Let's start a 5 rounds game.
  let yourScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++){
    let playerSelection = prompt(`What do you want to choose in round${i+1}?`, "Rock, Paper, or Scissors");
    while((playerSelection.toLowerCase() !== "rock") && (playerSelection.toLowerCase() !== "paper") && (playerSelection.toLowerCase() !== "scissors")){
      alert("You typed in wrong format. You can only type 'rock', 'paper', 'scissors'. Please retype again.");
      playerSelection = prompt(`What do you want to choose in round${i+1}?`, "Rock, Paper, or Scissors");
    }
    
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    if (result === "WIN"){
      yourScore++;
    }else if (result === "TIE"){
      yourScore++;
      computerScore++;
    }else {
      computerScore++;
    }
    alert(`Your score ${yourScore}:${computerScore} Computer's score`);
  }

  if (yourScore > computerScore){
    alert(`YOU WIN!! With scores ${yourScore}:${computerScore}!!`);
  }else if (yourScore === computerScore){
    alert(`TIE!! Both have same scores ${yourScore}:${computerScore}!!`);
  }else {
    alert(`YOU LOSE!! With scores ${yourScore}:${computerScore}!!`);
  }
}


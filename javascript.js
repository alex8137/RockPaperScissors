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
    return `You Win! Your ${player} beats ${computerSelection}!`;
  }else if (player===computerSelection){
    return `Tie! Both choose same object, ${player}!`;
  }else {
    return `You Lose! Your ${player} is beaten by ${computerSelection}!`;
  }
}





const playerSelection = "paPEr";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
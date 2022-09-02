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






console.log(getComputerChoice());
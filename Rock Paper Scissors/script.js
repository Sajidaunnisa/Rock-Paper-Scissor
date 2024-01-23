const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

let userGameScore = 0;
let compGameScore = 0;

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
};

const drawGame = () => {
  msg.innerText = "Game was Draw! Play again.";
  msg.style.backgroundColor = "gray";
  msg.style.color = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userGameScore++;
    userScore.innerText = userGameScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  } else {
    compGameScore++;
    compScore.innerText = compGameScore;
    msg.innerText = `You loose!  ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

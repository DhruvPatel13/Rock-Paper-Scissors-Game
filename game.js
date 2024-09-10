//rock = 1
//paper = 2
//scissors = 3

const compScoreBoard = document.getElementById("compScore");
const userScoreBoard = document.getElementById("userScore");
const finalResult = document.querySelector(".result");
let randomNum = () => {
  return Math.floor(Math.random() * 3 + 1);
};
let userScore = 0;
let compScore = 0;


function startGame(user) {
  let comp = randomNum();
  if (
    (comp == 1 && user == 2) ||
    (comp == 2 && user == 3) ||
    (comp == 3 && user == 1)
  ) {
    finalResult.classList.remove("hide", "lose", "tie");
    userScore++;
    userScoreBoard.textContent = userScore;
    finalResult.classList.add("win");
    finalResult.innerText = `You Won :) ${convert(user)} Beats ${convert(
      comp
    )}`;
  } else if (
    (comp == 1 && user == 1) ||
    (comp == 2 && user == 2) ||
    (comp == 3 && user == 3)
  ) {
    finalResult.classList.remove("hide", "win", "lose");
    finalResult.classList.add("tie");
    finalResult.innerText = `Match Draw!!`;
  } else {
    finalResult.classList.remove("hide", "win", "tie");
    compScore++;
    compScoreBoard.innerText = compScore;
    finalResult.classList.add("lose");
    finalResult.textContent = `You Lose :( ${convert(comp)} Beats ${convert(
      user
    )}`;
  }
}

function convert(val) {
  let value;
  switch (val) {
    case 1:
      value = "Rock";
      break;
    case 2:
      value = "Paper";
      break;
    case 3:
      value = "Scissors";
      break;
  }
  return value;
}

function resetGame() {
  compScore = 0;
  userScore = 0;
  compScoreBoard.innerText = compScore;
  userScoreBoard.innerText = userScore;
  finalResult.classList.remove("win", "lose");
  finalResult.innerText = "Pick Your Move";
}

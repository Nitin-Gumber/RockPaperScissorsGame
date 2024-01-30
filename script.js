
"user strict";

let UserChoices = document.querySelectorAll(".choice");
let userDisplay = document.querySelector("#user-score");
let compDisplay = document.querySelector("#comp-score");
let messageDisplay = document.querySelector("#msg");
let messageCon = document.querySelector(".msg-container");

let userScore = 1;
let compScore = 1;

// Computer Option Generate ["rock", "paper", "scissors"]
function genCompChoice() {
  let options = ["rock", "paper", "scissors"];
  let ramdonId = Math.floor(Math.random() * 3);
  return options[ramdonId];
}

// User choice
UserChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.id;
    PlayGame(userChoice);
  });
});

// Play Game Function
function PlayGame(userChoice) {
  let compChoice = genCompChoice();

  if (userChoice === compChoice) {
    message(`Match Draw. Your ${userChoice} & Comp ${compChoice}`);
    messageCon.style.backgroundColor = "#081b31";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    if (userWin) {
      userDisplay.innerHTML = userScore++;
      message(`You win! Your ${userChoice} beats ${compChoice}`);
      messageCon.style.backgroundColor = "#0B6623";
    } else {
      message(`You loss. ${compChoice} beats your ${userChoice}`);
      compDisplay.innerHTML = compScore++;
      messageCon.style.backgroundColor = "#c30010";
    }
  }
}

// Print Message
function message(msg) {
  messageDisplay.innerHTML = `<p>${msg}</p>`;
}

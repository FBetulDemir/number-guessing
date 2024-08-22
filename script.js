let randomNumber = document.querySelector(".random_number");
let message = document.querySelector(".message");

const checkBtn = document.querySelector(".check_btn");
const restartButton = document.querySelector(".restart_btn");

let secretNum = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highestScore = 0;
console.log(secretNum);

checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".input_value").value);
  document.querySelector(".score").textContent = score;
  document.querySelector(".highest_score").textContent = highestScore;

  console.log("clicked");

  if (guess === secretNum) {
    message.textContent = "You have won!";
    if (highestScore < score) {
      highestScore = score;
    }
  } else if (!guess) {
    message.textContent = "No number, please enter a number!";
  } else if (guess !== secretNum) {
    message.textContent = "wrong number";
    score--;
    document.querySelector(".score").textContent = score;
    if (scoreDisplay < 1) {
      message.textContent = "You have lost!";
    }
  }
});

restartButton.addEventListener("click", function () {
  score = 20;
  secretNum = Math.floor(Math.random() * 20) + 1;

  message.textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".random_number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".random_number").style.width = "15rem";
});

let randomNumber = document.querySelector(".random_number");
let message = document.querySelector(".message");

const checkBtn = document.querySelector(".check_btn");
const restartButton = document.querySelector(".restart_btn");

let secretNum = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highestScore = 0;
console.log(secretNum);
document.querySelector(".score").textContent = score;
document.querySelector(".highest_score").textContent = highestScore;

checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".input_value").value);

  if (guess === secretNum) {
    message.textContent = "You have won!";
    randomNumber.textContent = secretNum;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".input_value").disabled = true;

    if (highestScore < score) {
      highestScore = score;
      document.querySelector(".highest_score").textContent = highestScore;
    }
  } else if (!guess) {
    message.textContent = "No number, please enter a number!";
  } else if (guess !== secretNum) {
    message.textContent = guess > secretNum ? "📈 Too high!" : "📉 Too low!";
    score--;
    document.querySelector(".score").textContent = score;
    if (score < 1) {
      message.textContent = "You have lost!";
    }
  }
});

restartButton.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".input_value").disabled = false;
  score = 20;
  secretNum = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".input_value").value = "";
  message.textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".random_number").textContent = "?";
  document.querySelector(".guess").value = "";
});

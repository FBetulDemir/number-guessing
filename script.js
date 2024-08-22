let randomNumber = document.querySelector(".random_number");
let message = document.querySelector(".message");
const score = document.querySelector(".score");
const highestScore = document.querySelector(".highest_score");
let inputValue = document.querySelector(".input_value").value;
const checkBtn = document.querySelector(".check_btn");
const restartButton = document.querySelector(".restart_btn");

console.log(inputValue);
function startGame() {
  score.innerHTML = 20;
  randomNumber.innerHTML = Math.floor(Math.random() * 20 + 1);
  checkBtn.addEventListener("click", function () {
    if (inputValue === randomNumber) {
      message.innerHTML = "You have won!";
    }
    // inputValue === randomNumber ? "You have won!" : "Wrong number!";
  });
}
startGame();

restartButton.addEventListener("click", function () {
  startGame();
});

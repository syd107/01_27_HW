// function saveHighscore() {
//   var printHighscore = document.createElement("div");
//   printHighscore.textContent = timeLeft;
//   console.log(timerInterval);
// }

// var highscoresList = document.getElementById("highscoresList");
// var highscores = JSON.parse(localStorage).getItem("highscores") || [];
// console.log(highscores);

var initials = document.getElementById("userInitials");
var submitBtn = document.getElementById("submitBtn");

initials.addEventListener("keyup", () => {
  submitBtn.disabled = !initials.value;
});

var mostRecentScore = localStorage.getItem("timeLeft");
console.log(mostRecentScore);
var finalScore = document.getElementById("finalScore");

finalScore.innerText = mostRecentScore;

saveHighscore = e => {
  e.preventDefault();
};
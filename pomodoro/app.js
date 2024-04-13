const pomodoroDuration = 25 * 60; // 25 minutes in seconds
const shortBreakDuration = 10 * 60; // 10 minutes in seconds
const longBreakDuration = 20 * 60; // 20 minutes in seconds

let timer;
let countdownTime = pomodoroDuration;

const countdownDisplay = document.querySelector('.countdown');

function startTimer() {
  timer = setInterval(updateCountdown, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function updateCountdown() {
  const minutes = Math.floor(countdownTime / 60);
  let seconds = countdownTime % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  countdownDisplay.textContent = `${minutes}:${seconds}`;
  if (countdownTime === 0) {
    clearInterval(timer);
    // Handle timer completion (e.g., switch to short break, long break)
  } else {
    countdownTime--;
  }
}

document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('stop-btn').addEventListener('click', stopTimer);


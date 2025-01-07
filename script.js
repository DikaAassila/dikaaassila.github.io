// Set the initial countdown value
let countDown = 5;

// Get the countdown span element
const countdownElement = document.getElementById("countdown");

// Update the countdown every second
const interval = setInterval(() => {
  countDown--;
  countdownElement.textContent = countDown;

  // Redirect when countdown reaches 0
  if (countDown === 0) {
    clearInterval(interval);
    window.location.href = "https://www.dicastal.com/en/"; // Replace with the actual parent company URL
  }
}, 1000);

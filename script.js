function startCountdown() {
  const loaderText = document.getElementById("loader-text");
  let countdown = 5;

  const countdownInterval = setInterval(() => {
    if (countdown > 0) {
      loaderText.innerText = `Redirecting the Company's Group Website in ${countdown}`;
      countdown--;
    } else {
      loaderText.innerText = "Redirecting, please wait...";
      clearInterval(countdownInterval);
      window.location.href = "https://www.dicastal.com/en"; // Replace with your target URL
    }
  }, 1000); // Update every second
}

// Start the redirection once the page is loaded
document.addEventListener("DOMContentLoaded", startCountdown);
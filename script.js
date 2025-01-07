function redirectAfterDelay() {
  setTimeout(() => {
    window.location.href = "https://www.dicastal.com/en"; // Replace with your target URL
  }, 2000); // 2 seconds delay
}

// Start the redirection once the page is loaded
document.addEventListener("DOMContentLoaded", redirectAfterDelay);
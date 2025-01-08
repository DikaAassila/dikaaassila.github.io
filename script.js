function setupRedirection() {
  const site1Button = document.getElementById("site1-button");
  const site2Button = document.getElementById("site2-button");

  site1Button.addEventListener("click", () => {
    window.location.href = "https://dmaportal.dicastalma.com/public/"; // Replace with your target URL for Site 1
  });

  site2Button.addEventListener("click", () => {
    window.location.href = "https://www.dicastal.com/en/"; // Replace with your target URL for Site 2
  });
}

// Setup the redirection once the page is loaded
document.addEventListener("DOMContentLoaded", setupRedirection);
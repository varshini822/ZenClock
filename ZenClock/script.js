const clockEl = document.getElementById("clock");
const toggleBtn = document.getElementById("toggleBtn");

function updateClock() {
  const now = new Date();
  const hrs = String(now.getHours()).padStart(2, "0");
  const mins = String(now.getMinutes()).padStart(2, "0");
  const secs = String(now.getSeconds()).padStart(2, "0");
  clockEl.textContent = `${hrs}:${mins}:${secs}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Toggle dark mode
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

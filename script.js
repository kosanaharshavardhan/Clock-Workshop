// ====== Clock Update Logic ======
function rotateHands(clockId) {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const clock = document.getElementById(clockId);
  if (!clock) return;

  const hourHand = clock.querySelector(".hour");
  const minuteHand = clock.querySelector(".minute");
  const secondHand = clock.querySelector(".second");

  hourHand.style.transform = `rotate(${30 * hour + minute / 2}deg)`;
  minuteHand.style.transform = `rotate(${6 * minute}deg)`;
  secondHand.style.transform = `rotate(${6 * second}deg)`;
}

function updateAllClocks() {
  document.querySelectorAll(".clock").forEach((clock) => {
    const id = clock.id;
    rotateHands(id);
  });
}

setInterval(updateAllClocks, 1000);
updateAllClocks();

// ====== Theme Toggle ======
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ====== Upvote System with sessionStorage ======
document.querySelectorAll(".upvote").forEach((button) => {
  const card = button.closest(".clock-card");
  const clockId = card.getAttribute("data-id");
  const countSpan = button.querySelector(".count");

  let votes = sessionStorage.getItem(clockId);
  if (votes) countSpan.textContent = votes;

  button.addEventListener("click", () => {
    let votes = parseInt(sessionStorage.getItem(clockId) || "0", 10);
    votes++;
    sessionStorage.setItem(clockId, votes);
    countSpan.textContent = votes;
  });
});
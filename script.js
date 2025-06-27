const colors = [
  '#FF5733', '#33C1FF', '#8E44AD', '#2ECC71', '#F1C40F',
  '#E67E22', '#1ABC9C', '#3498DB', '#9B59B6', '#E74C3C',
  '#34495E', '#2C3E50', '#27AE60', '#F39C12', '#D35400'
];

let currentColorIndex = 0;
const colorBtn = document.getElementById('colorToggle');
colorBtn.addEventListener('click', () => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  document.body.style.backgroundColor = colors[currentColorIndex];
});

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

  const hourDeg = (hour % 12) * 30 + minute / 2;
  const minuteDeg = minute * 6;
  const secondDeg = second * 6;

  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

function updateAllClocks() {
  for (let i = 1; i <= 15; i++) {
    rotateHands(`clock${i}`);
  }
}

setInterval(updateAllClocks, 1000);
updateAllClocks();
// script.js
// disco
  const colors = [
    '#FF6B6B', '#4ECDC4', '#1A535C', '#F7B32B', '#6A0572',
    '#00A8E8', '#A2D729', '#F25F5C', '#FFE156', '#3B3B98',
    '#8D8741', '#C3073F', '#00A676', '#7400B8', '#EF476F'
  ];

  let currentColorIndex = 0;
  const colorBtn = document.getElementById('colorToggle');
  colorBtn.style.background = 'linear-gradient(135deg, #6a11cb, #2575fc)';
  colorBtn.style.color = '#fff';
  colorBtn.style.padding = '12px 24px';
  colorBtn.style.borderRadius = '30px';
  colorBtn.style.fontSize = '1rem';
  colorBtn.style.border = 'none';
  colorBtn.style.cursor = 'pointer';
  colorBtn.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
  colorBtn.style.transition = 'all 0.4s ease';

  colorBtn.addEventListener('mouseover', () => {
    colorBtn.style.transform = 'scale(1.05)';
    colorBtn.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
  });

  colorBtn.addEventListener('mouseout', () => {
    colorBtn.style.transform = 'scale(1)';
    colorBtn.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
  });

  colorBtn.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentColorIndex];
  });

  // Assign different shapes to each clock
  document.addEventListener('DOMContentLoaded', () => {
    const shapes = [
      '50%',    // circle
      '20%',    // rounded square
      '0%',     // square
      '40% / 60%',  // oval horizontal
      '60% / 40%',  // oval vertical
      '50% / 20%',
      '20% / 50%',
      '30% / 70%',
      '70% / 30%',
      '35% / 65%',
      '65% / 35%',
      '45% / 55%',
      '55% / 45%',
      '50% / 50%',
      '10%'
    ];

    for (let i = 1; i <= 15; i++) {
      const clock = document.getElementById(`clock${i}`);
      if (clock) {
        clock.style.borderRadius = shapes[i - 1];
      }
    }
  });

  function rotateHands(clockId) {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDeg = (hour % 12) * 30 + minute / 2;
    const minuteDeg = minute * 6;
    const secondDeg = second * 6;

    const clock = document.getElementById(clockId);
    if (!clock) return;

    const hourHand = clock.querySelector('.hour');
    const minuteHand = clock.querySelector('.minute');
    const secondHand = clock.querySelector('.second');

    if (hourHand && minuteHand && secondHand) {
      hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
      minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
      secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    }
  }

  function updateAllClocks() {
    for (let i = 1; i <= 15; i++) {
      rotateHands(`clock${i}`);
    }
  }

  // Animate clock hands every second
  setInterval(updateAllClocks, 1000);
  updateAllClocks();

  // Upvote functionality using sessionStorage
  document.querySelectorAll('.upvote').forEach(button => {
    const clockId = button.parentElement.dataset.id;
    const countSpan = button.querySelector('.count');

    // Load saved votes
    const storedCount = sessionStorage.getItem(clockId);
    if (storedCount) countSpan.textContent = storedCount;

    button.addEventListener('click', () => {
      let count = parseInt(countSpan.textContent);
      count++;
      countSpan.textContent = count;
      sessionStorage.setItem(clockId, count);
    });
  });
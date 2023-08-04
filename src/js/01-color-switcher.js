function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let interval;

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener('click', () => {
  if (!interval) {
    btnStart.disabled = true;
    btnStop.disabled = false;

    interval = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
});

btnStop.addEventListener('click', () => {
  if (interval) {
    clearInterval(interval);
    interval = null;

    btnStart.disabled = false;
    btnStop.disabled = true;
  }
});

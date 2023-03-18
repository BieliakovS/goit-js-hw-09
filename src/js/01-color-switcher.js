const bodyEl = document.querySelector('body');
const btnStartEL = document.querySelector('button[data-start]');
const btnStopEL = document.querySelector('button[data-stop]');

let colorChangeInterval = null;

btnStartEL.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();

  colorChangeInterval = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStartEL.disabled = true;
});

btnStopEL.addEventListener('click', () => {
  clearInterval(colorChangeInterval);
  btnStartEL.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

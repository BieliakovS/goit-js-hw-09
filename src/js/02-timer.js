import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startButton = document.querySelector('[data-start]');
const timerId = document.querySelector('.timer');
const daysId = document.querySelector('[data-days]');
const hoursId = document.querySelector('[data-hours]');
const minutesId = document.querySelector('[data-minutes]');
const secondsId = document.querySelector('[data-seconds]');
let countdownDate = null;

startButton.disabled = true;

timerId.style.display = 'flex';
timerId.style.justifyContent = 'space-between';
timerId.style.width = '550px';
timerId.style.padding = '20px 0';
timerId.style.fontSize = '20px';

daysId.style.fontSize = '40px';
hoursId.style.fontSize = '40px';
minutesId.style.fontSize = '40px';
secondsId.style.fontSize = '40px';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const nowDate = new Date();
    if (selectedDate <= nowDate) {
      window.alert('Please choose a date in the future');
    } else {
      startButton.disabled = false;
      countdownDate = selectedDate;
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startButton.addEventListener('click', () => {
  let countdownIntervalId = setInterval(() => {
    const msRemaining = countdownDate.getTime() - Date.now();

    if (msRemaining < 0) {
      clearInterval(countdownIntervalId);
      daysId.textContent = '00';
      hoursId.textContent = '00';
      minutesId.textContent = '00';
      secondsId.textContent = '00';

      startButton.disabled = false;

      return;
    }

    const { days, hours, minutes, seconds } = convertMs(msRemaining);

    daysId.textContent = `${days.toString().padStart(2, '0')}`;
    hoursId.textContent = `${hours.toString().padStart(2, '0')}`;
    minutesId.textContent = `${minutes.toString().padStart(2, '0')}`;
    secondsId.textContent = `${seconds.toString().padStart(2, '0')}`;

    startButton.disabled = true;
  }, 1000);
});

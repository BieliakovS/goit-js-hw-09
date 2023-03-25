import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const delayInput = form.elements.delay;
  const stepInput = form.elements.step;
  const amountInput = form.elements.amount;

  let delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  let delayArray = [];

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay)
      .then(result => {
        Notify.success(`✅ Fulfilled promise ${i + 1} in ${delayArray[i]}ms`);
      })
      .catch(error => {
        Notify.failure(`❌ Rejected promise ${i + 1} in ${delayArray[i]}ms`);
      });

    delayArray.push((delay += step));
  }
  e.target.reset();
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const delayInput = form.elements.delay;
  const stepInput = form.elements.step;
  const amountInput = form.elements.amount;

  const delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  delayInput.value = '';
  stepInput.value = '';
  amountInput.value = '';

  let nextDelay = delay;

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, nextDelay)
      .then(result => {
        Notify.success(`✅ Fulfilled promise ${i + 1} in ${delay}ms`);
      })
      .catch(error => {
        Notify.failure(`❌ Rejected promise ${i + 1} in ${delay}ms`);
      });

    nextDelay += step;
  }
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

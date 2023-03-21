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

  let nextDelay = delay;

  for (let i = 1; i <= amount; i += 1) {
    if (i !== 1) {
      nextDelay += step;
      createPromise(i, nextDelay);
    } else {
      createPromise(i, delay);
    }
  }
});

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve(
          { position, delay },
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        );
      } else {
        reject(
          { position, delay },
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        );
      }
    }, delay);
  });
}

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });

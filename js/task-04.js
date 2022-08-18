let counterValue = 0;
const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

minusBtn.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
} 
);
plusBtn.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
} 
);


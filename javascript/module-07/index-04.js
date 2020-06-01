// refs
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

// event
btnDecrementRef.addEventListener('click', decrementValue); // eslint-disable-line
btnIncrementRef.addEventListener('click', incrementValue); // eslint-disable-line
let counterValue = 0;

// fn
function decrementValue() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}

function incrementValue() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}

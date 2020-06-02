// refs
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

// events
btnDecrementRef.addEventListener('click', decrementValue); // eslint-disable-line
btnIncrementRef.addEventListener('click', incrementValue); // eslint-disable-line
// events setting
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

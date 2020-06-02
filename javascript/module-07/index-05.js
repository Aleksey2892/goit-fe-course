// refs
const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

// event
inputRef.addEventListener('input', onInputText); // eslint-disable-line

// fn
function onInputText() {
  const textDefault = 'незнакомец';
  if (nameOutputRef.textContent === textDefault) nameOutputRef.textContent = '';

  nameOutputRef.textContent = event.target.value; // eslint-disable-line

  if (!inputRef.value) nameOutputRef.textContent = textDefault;
}

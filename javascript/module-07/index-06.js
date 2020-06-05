// refs
const inputTextRef = document.querySelector('#validation-input');
const validDataLength = Number(inputTextRef.getAttribute('data-length'));

// event
inputTextRef.addEventListener('blur', inputTextHandler); // eslint-disable-line

// event handler
function inputTextHandler() {
  event.target.value.length < validDataLength // eslint-disable-line
    ? addInvalidClass() // eslint-disable-line
    : addValidClass(); // eslint-disable-line

  if (!event.target.value.length) {
    removeClass(); // eslint-disable-line
  }
}

// fns
function addValidClass() {
  inputTextRef.classList.add('valid');
  if (inputTextRef.classList.contains('invalid')) {
    inputTextRef.classList.remove('invalid');
  }
}

function addInvalidClass() {
  inputTextRef.classList.add('invalid');
  if (inputTextRef.classList.contains('valid')) {
    inputTextRef.classList.remove('valid');
  }
}

function removeClass() {
  inputTextRef.classList.contains('valid') // eslint-disable-line
    ? inputTextRef.classList.remove('valid') // eslint-disable-line
    : inputTextRef.classList.remove('invalid'); // eslint-disable-line
}

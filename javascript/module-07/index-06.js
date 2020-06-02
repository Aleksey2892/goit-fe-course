// refs
const inputTextRef = document.querySelector('#validation-input');
const validDataLength = Number(inputTextRef.getAttribute('data-length'));

// event
inputTextRef.addEventListener('blur', inputTextHandler); // eslint-disable-line

// fn
function inputTextHandler() {
  if (event.target.value.length < validDataLength) {
    inputTextRef.classList.add('invalid');
    if (inputTextRef.classList.contains('valid')) {
      inputTextRef.classList.remove('valid');
    }
  } else {
    inputTextRef.classList.add('valid');
    if (inputTextRef.classList.contains('invalid')) {
      inputTextRef.classList.remove('invalid');
    }
  }

  if (!event.target.value.length) {
    inputTextRef.classList.remove('valid', 'invalid');
  }
}

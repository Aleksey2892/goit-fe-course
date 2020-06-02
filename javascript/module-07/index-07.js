// refs
const inputSizeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

// event
inputSizeRef.addEventListener('input', inputSizeHandler); // eslint-disable-line
// event settings
inputSizeRef.step = 1;
inputSizeRef.max = 20;
inputSizeRef.min = 10;
inputSizeRef.valueAsNumber = 15;

// fn
function inputSizeHandler() {
  const sizeValue = event.target.value; // eslint-disable-line

  textRef.style.fontSize = `${sizeValue}px`;
}

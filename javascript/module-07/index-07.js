// refs
const inputSizeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

// event
inputSizeRef.addEventListener('input', fn);
// event settings
inputSizeRef.step = 1;
inputSizeRef.max = 20;
inputSizeRef.min = 10;
inputSizeRef.valueAsNumber = 15;

// fn

function fn() {
  const sizeValue = event.target.value;

  textRef.style.fontSize = `${sizeValue}px`;

  console.log(event.target.value);
}

// refs
const inputCtrlsRef = document.querySelector('#controls');
const inputNumRef = inputCtrlsRef.firstElementChild;
const btnCreateRef = document.querySelector('[data-action="render"]');
const btnRemoveRef = document.querySelector('[data-action="destroy"]');

console.log(inputCtrlsRef);
console.log(inputNumRef);
console.log(btnCreateRef);
console.log(btnRemoveRef);

// events
// inputNumRef.addEventListener('change', inputHandler); // eslint-disable-line
btnCreateRef.addEventListener('click', inputHandler);

// fn
function inputHandler() {
  console.log('inputHandler');
  const amount = inputNumRef.value;
  createBoxes(amount); // eslint-disable-line
}

function createBoxes(amount) {
  console.log('createBoxes:', amount);
}

const create = () => {
  const div = document.createElement('div');
  div.style.width = '30px';
  div.style.height = '30px';

  console.log(div);
};

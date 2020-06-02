// refs
const inputCtrlsRef = document.querySelector('#controls');
const inputAmountRef = inputCtrlsRef.firstElementChild;
const btnCreateRef = document.querySelector('[data-action="render"]');
const btnRemoveRef = document.querySelector('[data-action="destroy"]');
const boxesOutputRef = document.querySelector('#boxes');

//
// events
btnCreateRef.addEventListener('click', () => {
  console.log('inputHandler');
  const amount = inputAmountRef.value;
  createBoxes(amount); // eslint-disable-line
});

btnRemoveRef.addEventListener('click', removeBoxes); // eslint-disable-line

//
// fn create
function createBoxes(amount) {
  // ready items
  const arrayBoxes = [];
  // default sizes
  let divWidth = 30;
  let divHeight = 30;
  //
  for (let i = 0; i < amount; i += 1) {
    console.log('createBoxes:');
    // create element
    const div = document.createElement('div');
    // makes color
    div.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() *
      255}, ${Math.random() * 255})`;
    // makes sizing
    div.style.width = `${divWidth}px`;
    div.style.height = `${divHeight}px`;
    divWidth += 10;
    divHeight += 10;
    // send to array
    arrayBoxes.push(div);
  }
  // publication in html
  boxesOutputRef.append(...arrayBoxes);
}

//
// fn remove
function removeBoxes() {
  console.log((boxesOutputRef.textContent = ''));
}

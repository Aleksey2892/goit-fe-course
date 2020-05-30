const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsDomRef = document.querySelector('.js-ingredients');

const createItem = text => {
  const createLi = document.createElement('li');
  createLi.textContent = text;
  return createLi;
};

const addList = items => items.map(item => createItem(item));

const addListToDom = (domRef, items) => {
  domRef.append(...addList(items));
};

addListToDom(ingredientsDomRef, ingredients);

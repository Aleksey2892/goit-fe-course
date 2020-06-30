import menuTemplate from '../templates/menu.hbs';

const root = document.querySelector('#root');

const menuData = {
  title: 'Eat it createElement, templates rule!',
  items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
};

const markup = menuTemplate(menuData); // html разметка с подставленным значениями

root.insertAdjacentHTML('beforeend', markup);

import local from './localstorage';

console.log(local);

const save = local.save;
const load = local.load;
const remove = local.remove;

save('key', 'key');
// remove('keys');

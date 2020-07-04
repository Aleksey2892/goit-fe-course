import menuTemplate from '../templates/menu.hbs';
import menuData from '../menu.json';

const menuRef = document.querySelector('.js-menu');

const markup = menuTemplate(menuData);

menuRef.insertAdjacentHTML('beforeend', markup);

// js gallery array import
import gallery from './gallery-items.js'; //eslint-disable-line

// refs obj
const refs = {
  ulGallery: document.querySelector('.js-gallery'),
  modalBox: document.querySelector('.js-lightbox'),
  modalImage: document.querySelector('.lightbox__image'),
};

// fns create and render gallery
(function() {
  refs.ulGallery.append(...createGalleryArray(gallery)); //eslint-disable-line
})();

function createGalleryArray(imgArray) {
  return imgArray.map(
    obj => templateLiItem(obj.original, obj.preview, obj.description), //eslint-disable-line
  );
}

function templateLiItem(href, src, alt) {
  const li = document.createElement('li');
  li.classList.add('gallery__item');

  li.insertAdjacentHTML(
    'beforeend',
    `<a class="gallery__link" href="${href}"><img class="gallery__image" src="${src}" data-source="${href}" alt="${alt}"/></a>`,
  );

  return li;
}

//

// event listener
refs.ulGallery.addEventListener('click', onGalleryClick);

// event fn
function onGalleryClick(event) {
  if (event.target.nodeName !== 'IMG') return;

  event.preventDefault();

  const targetSource = event.target.dataset.source;
  const targetAlt = event.target.alt;

  openModal(targetSource, targetAlt); //eslint-disable-line
}

function openModal(src, alt) {
  refs.modalImage.src = src;
  refs.modalImage.alt = alt;
  refs.modalBox.classList.add('is-open');
}

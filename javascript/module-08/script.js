// JS GALLERY ARRAY IMPORT
import gallery from './gallery-items.js'; //eslint-disable-line

// REFS OBJS
const refs = {
  ulGallery: document.querySelector('.js-gallery'),
  modalBox: document.querySelector('.js-lightbox'),
  modalImage: document.querySelector('.lightbox__image'),
};

// FNS CREATE AND RENDER
(function() {
  refs.ulGallery.append(...createGalleryArr(gallery)); //eslint-disable-line
})();

function createGalleryArr(imgArray) {
  return imgArray.map(
    (obj, idx) => createLi(obj.original, obj.preview, obj.description, idx), //eslint-disable-line
  );
}

function createLi(orig, preview, descr, idx) {
  const item = document.createElement('li');
  item.classList.add('gallery__item');

  insertImg(item, orig, preview, descr, idx); //eslint-disable-line

  return item;
}

function insertImg(item, orig, preview, descr, idx) {
  item.insertAdjacentHTML(
    'beforeend',
    `<a class="gallery__link" href="${orig}">

  <img class="gallery__image" 
  src="${preview}" 
  data-source="${orig}" 
  data-idx="${idx}" 
  alt="${descr}"/>
  
  </a>`,
  );
}
//

// GALLERY LISTENER
refs.ulGallery.addEventListener('click', event => {
  if (event.target.nodeName !== 'IMG') return;

  event.preventDefault();

  const evSource = event.target.dataset.source;
  const evAlt = event.target.alt;
  const evIdx = event.target.dataset.idx;

  modalOpen(evSource, evAlt, evIdx); //eslint-disable-line
});

// EVENT FNS
function modalOpen(src, alt, idx) {
  refs.modalImage.src = src;
  refs.modalImage.alt = alt;
  refs.modalImage.dataset.idx = idx;
  refs.modalBox.classList.add('is-open');

  // ADD EVENT LISTENERS
  refs.modalBox.addEventListener('click', modalHandler); //eslint-disable-line
  window.addEventListener('keydown', modalSwitchImg); //eslint-disable-line
}

function modalHandler(event) {
  // CLOSE MODAL
  const clickAction = event.target.dataset.action === 'close-lightbox';
  const clickOverlay = event.target.classList.value === 'lightbox__content';
  const keyEsc = event.key === 'Escape';

  if (clickAction || clickOverlay || keyEsc) modalClose(); //eslint-disable-line
}

function modalSwitchImg(event) {
  // SWITCHING IMG
  const left = 'ArrowLeft';
  const right = 'ArrowRight';
  const keyArrow = event.code === left || event.code === right;

  let imgIdx = Number(refs.modalImage.dataset.idx);

  keyArrow === 'ArrowRight' ? nextImg() : prevImg(); //eslint-disable-line
  const setImg = gallery[imgIdx].original;

  refs.modalImage.src = setImg;
  refs.modalImage.dataset.idx = imgIdx;

  // SWITCHING
  function nextImg() {
    imgIdx < gallery.length - 1 ? (imgIdx += 1) : (imgIdx = 0); //eslint-disable-line
  }
  function prevImg() {
    imgIdx > 0 ? (imgIdx -= 1) : (imgIdx = gallery.length - 1); //eslint-disable-line
  }
}

function modalClose() {
  refs.modalBox.classList.remove('is-open');
  refs.modalImage.src = '';
  refs.modalImage.alt = '';

  // CLOSE LISTENERS
  refs.modalBox.removeEventListener('click', modalHandler);
  window.removeEventListener('keydown', modalHandler);
}

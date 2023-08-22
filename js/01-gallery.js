import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

    
    const createGalleryItem = ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
const renderGallery = items => {
      const galleryMarkup = items.map(createGalleryItem).join('');
      gallery.innerHTML = galleryMarkup;
    };
    
renderGallery(galleryItems);
    
let instance;   
gallery.addEventListener('click', e => {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains("gallery__image")) {
    const original = target.dataset.source;
    instance = basicLightbox.create(`
      <img src="${original}" width="800" height="600">
    `);
    instance.show();
    window.addEventListener('keydown', onEscKeyPress);
  }
});

const onEscKeyPress = e => {
  if (e.code === 'Escape') {
    instance.close();
    window.removeEventListener('keydown', onEscKeyPress);
  }
};
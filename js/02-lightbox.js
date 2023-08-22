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
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 1,

});
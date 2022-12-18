import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector('.gallery');

// console.log(createGalleryLayout(galleryItems));
function createGalleryLayout(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}" onclick = "return false">
  <img class="gallery__image" src="${preview}"
      alt="${description}" />
</a>`;
    })
    .join('');
}

divGallery.insertAdjacentHTML('afterbegin', createGalleryLayout(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
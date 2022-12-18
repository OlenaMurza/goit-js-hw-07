import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector('.gallery');

// console.log(createGalleryLayout(galleryItems));
function createGalleryLayout(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="large-image.jpg" onclick = "return false">
  <img class="gallery__image" src="${preview}"
      data-source="${original}"
      alt="${description}" />
</a>`;
    })
    .join('');
}

divGallery.insertAdjacentHTML('afterbegin', createGalleryLayout(galleryItems));

divGallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
    
    
    let gallery = new simpleLightbox('.gallery a', {
        capsionsData: 'alt', captionPosition: 'bottom', captionDelay: 250, disableRightClick: true,
  scrollZoom: false, enableKeyboard: true,
    });
});

console.log(simpleLightbox);

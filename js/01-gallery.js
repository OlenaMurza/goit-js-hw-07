import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector('.gallery');

// console.log(createGalleryLayout(galleryItems));
function createGalleryLayout(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

divGallery.insertAdjacentHTML('afterbegin', createGalleryLayout(galleryItems));

divGallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  // Якщо виводиться картинка
  const urlBigImage = e.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src ="${urlBigImage}" width = "800" heigth = "600">`
  );
  
  instance.show();
});


console.log(basicLightbox);




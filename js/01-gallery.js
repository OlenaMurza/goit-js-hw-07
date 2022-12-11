import { galleryItems } from './gallery-items.js';
// Change code below this line

// const divGallery = document.querySelector('gallery');
console.log(galleryItemsJs);
function galleryItemsJs (images) {
    const items = images.map(image => {
        return `
           <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>
        `
    }).join('');
}


// console.log(items);

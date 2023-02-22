import { galleryItems } from './gallery-items.js';
// Change code below this line

const items = galleryItems.map(item => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}" >
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>`}).join("");

const galleryBox = document.querySelector('.gallery');
galleryBox.innerHTML = items;

galleryBox.addEventListener('click', onLinkClick);

const instance = basicLightbox.create(`<img width="1140" height="720" src="#">`);

function onLinkClick(event) {
  event.preventDefault();
  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show(); 
  window.addEventListener('keydown', onEscPress)
}

function onEscPress(event) {
  console.log(event);
 if(event.code === "Escape") {
  instance.close();
  window.removeEventListener('keydown', onEscPress);
 }
}


console.log(galleryItems);






// function onLinkClick(event) {
//     event.preventDefault();
//     const instance = basicLightbox.create(`<img width="1140" height="720" src="${event.target.dataset.source}">`)
// 	  instance.show();  
// }
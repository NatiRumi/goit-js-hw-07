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

function onLinkClick(event) {
    event.preventDefault();
    return event.target.dataset.source;
}


document.querySelector('a.gallery__link').onclick = () => {
	basicLightbox.create(`
		<img width="1400" height="900" src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg">
	`).show()
}


console.log(galleryItems);




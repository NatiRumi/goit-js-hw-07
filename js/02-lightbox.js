import { galleryItems } from './gallery-items.js';
// Change code below this line

const items = galleryItems.map(item => {
    return `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`}).join("");

const galleryBox = document.querySelector('.gallery');
galleryBox.innerHTML = items;
    
galleryBox.addEventListener('click', onLinkClick);

function onLinkClick(event) {
    event.preventDefault();
    let gallery = new SimpleLightbox('.gallery a', { caption: true, captionSelector: 'img[alt]', captionType: 'attr', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });   
}

console.log(galleryItems);






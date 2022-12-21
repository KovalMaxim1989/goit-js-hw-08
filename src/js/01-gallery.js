// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery')

const markUp = galleryItems
.map(({ preview, original, description }) =>
`
   <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
 
`)
.join('');

galleryEl.innerHTML = markUp;
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });


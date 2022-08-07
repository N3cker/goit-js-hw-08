import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryWrapper = document.querySelector('.gallery');

const imageCreate = (src, data, alt) => {
    
    const a = document.createElement('a');
    const img = document.createElement('img');

    a.classList.add('gallery__item');
    a.href = data;

    img.classList.add('gallery__image');
    img.src = src;
    img.alt = alt;
    img.title = alt;
    a.appendChild(img);

    return a;
}

const addImagesToGallery = () => {
    galleryItems.forEach(item => {
        const img = imageCreate(item.preview, item.original, item.description);
        galleryWrapper.appendChild(img);
    })
}

addImagesToGallery();

new SimpleLightbox('.gallery a', {
    captionDelay: 250
});
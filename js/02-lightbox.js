import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const galleryItemList = createImageMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryItemList);

function createImageMarkup(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<li>
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    </li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

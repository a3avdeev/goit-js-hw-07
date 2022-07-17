import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItemList = createImageMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryItemList);

function createImageMarkup(item) {
  return item
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
    .join("");
}

gallery.addEventListener("click", imageClick);

function imageClick(event) {
  event.preventDefault();
  const galleryImage = event.target.classList.contains("gallery__image");
  if (!galleryImage) {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`
  );

  instance.show();
}

const lightbox = document.querySelector("#image-lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const closeButton = document.querySelector("#lightbox-close");
const expandableImages = document.querySelectorAll(".expandable-image");

function openLightbox(image) {
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt || "";
  lightboxCaption.textContent = image.dataset.caption || image.alt || "";

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");

  lightboxImage.src = "";
  lightboxImage.alt = "";
  lightboxCaption.textContent = "";
}

expandableImages.forEach((image) => {
  image.addEventListener("click", () => openLightbox(image));
});

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});
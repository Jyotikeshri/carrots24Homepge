const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider-image");
let currentImageIndex = 0;

images.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
  if (currentImageIndex > 3) {
    return (currentImageIndex = 0);
  }
  images.forEach((slide) => {
    slide.style.transform = `translateX(-${currentImageIndex * 100}%)`;
  });
};

const goNext = () => {
  currentImageIndex++;
  slideImage();
};

const goPrev = () => {
  currentImageIndex--;
  slideImage();
};

const slides = document.querySelector(".sl-w");
const slide = document.querySelectorAll(".slide-content");

let index = 0;

document.querySelector(".next-test").addEventListener("click", () => {
  index = index + 1;
  if (index > 3) {
    return (index = 1);
  }
  updateSlider();
});

function updateSlider() {
  slide.forEach((slide) => {
    slide.style.transform = `translateX(${-index * 110}%)`;
  });
}

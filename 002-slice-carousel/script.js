let active_img = document.querySelector(".active_img");
let carousel_images = document.querySelectorAll(".carousel_image");

let index = 0;

function resetAllCarouselImages() {
  for (let i = 0; i < carousel_images.length; i++) {
    carousel_images[i].classList = "carousel_image";
  }
}

function selectActiveCarouselImage() {
  resetAllCarouselImages();
  carousel_images[index].classList = "carousel_image active";
}

function initalCarouselImage() {
  index = 0;
  selectActiveCarouselImage();
  active_img.style.backgroundImage = `url('images/${index + 1}.jpg')`;
}

initalCarouselImage();
for (let i = 0; i < carousel_images.length; i++) {
  carousel_images[i].onmousemove = function () {
    active_img.style.backgroundImage = `url('images/${i + 1}.jpg')`;
    index = i;
    selectActiveCarouselImage();
  };
}

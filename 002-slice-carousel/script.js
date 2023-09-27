let active_img = document.querySelector(".active_img");
let carousel_images = document.querySelectorAll(".carousel_image");

let index = 0;
let time;

function resetAllCarouselImages() {
  for (let i = 0; i < carousel_images.length; i++) {
    carousel_images[i].classList = "carousel_image";
  }
}

function selectActiveCarouselImage() {
  resetAllCarouselImages();
  if (index == carousel_images.length) {
    index = 0;
  }
  carousel_images[index].classList = "carousel_image active";
}
function setTimer() {
  time = setInterval(() => {
    selectActiveCarouselImage();
    index++;
    active_img.style.backgroundImage = `url('images/${index}.avif')`;
    if (index >= carousel_images.length) {
      index = 0;
    }
  }, 1500);
}
setTimer();
for (let i = 0; i < carousel_images.length; i++) {
  carousel_images[i].onmousemove = function () {
    active_img.style.backgroundImage = `url('images/${i + 1}.avif')`;
    clearInterval(time);
    index = i + 1;
    resetAllCarouselImages();
    setTimer();
  };
}

let active_img = document.querySelector(".active_img");
let carousel_images = document.querySelectorAll(".carousel_image");

let index = 0;

function initActiveImage() {
  active_img.style.backgroundImage = `url('images/1.avif')`;
}

function resetAllCarouselImages() {
  for (let i = 0; i < carousel_images.length; i++) {
    carousel_images[i].classList.remove("active");
  }
}

function selectActiveCarouselImage() {
  resetAllCarouselImages();
  if (index == carousel_images.length) {
    index = 0;
  }
  carousel_images[index].classList.add("active");
}

// Approach 1: update carousel without timer
initActiveImage();
carousel_images.forEach((carousel, idx) => {
  carousel.onmousemove = function () {
    active_img.style.backgroundImage = `url('images/${idx + 1}.avif')`;
    index = idx;
    selectActiveCarouselImage();
  };
});

// Approach 2: using Timer to auto swith between carousel
/*

let time;

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

initActiveImage();
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
*/

let active_img = document.querySelector(".active_img");
let carousel_images = document.querySelectorAll(".carousel_image");

let time;
// initial active image
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

// Set the time function to start the carousel chart
function timerToStartCarousel() {
  time = setInterval(() => {
    selectActiveCarouselImage();
    index++;
    active_img.style.backgroundImage = `url('images/${index}.jpg')`;
    if (index === carousel_images.length) {
      index = 0;
    }
  }, 1500);
}

for (let i = 0; i < carousel_images.length; i++) {
  carousel_images[i].addEventListener("mouseover", () => {
    active_img.style.backgroundImage = `url('images/${i + 1}.jpg')`;
    index = i;
    selectActiveCarouselImage();
    clearInterval(time);
  });

  carousel_images[i].addEventListener("mouseout", () => {
    index = i;
    timerToStartCarousel();
  });
}

timerToStartCarousel();

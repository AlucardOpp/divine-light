const slider = document.querySelector('.top-slider__slider');

const initTopSlider = () => {
  if (!slider) {
    return;
  }

  let swiper = new Swiper(slider, {
    slidesPerView: 3.2,
    slidesPerGroup: 3.2,
    speed: 500,
    navigation: {
      nextEl: '.top-slider-next',
      prevEl: '.top-slider-prev',
    },
    breakpoints: {
      1600: {
        slidesPerView: 10,
        slidesPerGroup: 10,
        spaceBetween: 6,
      },
      1280: {
        slidesPerView: 8,
        slidesPerGroup: 8,
      },
      1024: {
        slidesPerGroup: 6.6,
        slidesPerView: 6.6,
        spaceBetween: 6,
      },
      768: {
        slidesPerGroup: 1,
        slidesPerView: 5.3,
        spaceBetween: 6,
      },
    },
  });
};

export {initTopSlider};

const catalogSlider = document.querySelector('.header-slider');

const headerCatalogSlider = () => {
  if (!catalogSlider) {
    return;
  }

  const swiperEl = catalogSlider.querySelector('.swiper');
  const prevSlideButton = catalogSlider.querySelector('.slider-controls__button-prev');
  const nextSlideButton = catalogSlider.querySelector('.slider-controls__button-next');

  const swiper = new Swiper(swiperEl, {
    slidesPerView: 'auto',
    allowTouchMove: false,
    spaceBetween: 0,
    speed: 500,
    slidesPerGroupAuto: true,
    breakpoints: {
      1024: {
        allowTouchMove: false,
      },
      320: {
        allowTouchMove: true,
      },
    },

    navigation: {
      nextEl: nextSlideButton,
      prevEl: prevSlideButton,
    },
  });
};

export {headerCatalogSlider};

const sliders = document.querySelectorAll('.slider-list__container');

const sliderList = () => {
  if (!sliders.length) {
    return;
  }
  sliders.forEach((slider) => {
    const swiper = new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 0,
    });
  });
};

export {sliderList};

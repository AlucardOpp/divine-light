const sliders = document.querySelectorAll('.delivery-point__slider');

const deliveryPointSlider = () => {
  if (!sliders.length) {
    return;
  }
  sliders.forEach((slider) => {
    const swiper = new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 8,
    });
  });
};

export {deliveryPointSlider};

const swiper = document.querySelector('.tabs-lighting__container.swiper');

const sliderTabs = () => {
  if (!swiper) {
    return;
  }

  const slider = new Swiper(swiper, {
    slidesPerView: 'auto',
    spaceBetween: 0,
  });
};

export {sliderTabs};

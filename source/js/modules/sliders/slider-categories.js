// слайдер карточек
const sliderCategories = () => {
  const sliderCardsEl = document.querySelectorAll('[data-slider-cards="categories"]');

  if (!sliderCardsEl.length) {
    return;
  }

  for (let el of sliderCardsEl) {
    if (!el.classList.contains('is-initialized')) {
      el.classList.add('is-initialized');

      const swiper = el.querySelector('[data-swiper="slider-cards"]');
      // eslint-disable-next-line
      new Swiper(swiper, {
        speed: 500,
        slidesPerView: 'auto',
        spaceBetween: 8,
        slidesOffsetBefore: 0,
        slidesPerGroupAuto: true,
        breakpoints: {
          1440: {
            spaceBetween: 24,
            slidesOffsetBefore: 0,
          },
          1280: {
            spaceBetween: 24,
          },
          1024: {
            spaceBetween: 16,
            slidesOffsetBefore: 0,
          },
          768: {
            spaceBetween: 16,
            slidesOffsetBefore: 32,
          },
          320: {
            spaceBetween: 8,
            slidesOffsetBefore: 16,
          },

        },

        navigation: {
          nextEl: '.slider-cards__swiper-button-next',
          prevEl: '.slider-cards__swiper-button-prev',
        },
      });
    }
  }

};

// для бэкенда: инициализирует слайдер карточек
window.sliderCategories = sliderCategories;


export {sliderCategories};

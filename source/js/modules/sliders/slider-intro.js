// слайдер карточек
const sliderIntro = () => {
  const sliderCardsEl = document.querySelectorAll('[data-slider-cards="intro"]');

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
        grabCursor: true,
        spaceBetween: 8,
        autoHeight: true,
        pagination: {
          clickable: true,
          el: '.swiper-pagination',
          dynamicBullets: true,
          dynamicMainBullets: 3,
        },
        breakpoints: {
          320: {
            slidesOffsetBefore: 16,
          },
          768: {
            slidesOffsetBefore: 0,
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
window.sliderIntro = sliderIntro;


export {sliderIntro};

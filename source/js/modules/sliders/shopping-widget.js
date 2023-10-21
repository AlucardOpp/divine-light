// слайдер карточек виджета
const shoppingWidget = () => {
  const sliders = document.querySelectorAll('[data-slider-cards="small"]');

  if (!sliders.length) {
    return;
  }

  for (let el of sliders) {
    if (!el.classList.contains('is-initialized')) {
      el.classList.add('is-initialized');

      const swiper = el.querySelector('[data-swiper="slider-cards"]');
      // eslint-disable-next-line
      new Swiper(swiper, {
        speed: 500,
        slidesPerView: 'auto',
        slidesPerGroupAuto: true,
        spaceBetween: 8,
        breakpoints: {
          768: {
            spaceBetween: 16,
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
window.shoppingWidget = shoppingWidget;


export {shoppingWidget};

// слайдер карточек
const sliderCards = () => {
  const sliderCardsCatalog = document.querySelectorAll('[data-slider-cards="catalog"]');
  const sliderCardsSlider = document.querySelectorAll('[data-slider-cards="slider"]');
  const sliderCardsEl = [...sliderCardsSlider, ...sliderCardsCatalog];
  let isAllowTouchMove = true;

  if (!sliderCardsEl.length) {
    return;
  }

  for (let el of sliderCardsEl) {

    let mobileSpaceBetween;
    let offset;
    let offsetMobile;

    if (el.closest('.reviews') || el.closest('.designers') || el.closest('.interiors')) {
      mobileSpaceBetween = 8;
    }

    if (el.closest('.reviews') || el.closest('.designers') || el.closest('.interiors')) {
      offset = 0;
      offsetMobile = 0;
    }

    if (el.closest('.popular-products') || el.closest('.sellout ') || el.closest('.you-watched') || el.closest('.might-like') || el.closest('.similar-goods') || el.closest('.series-goods') || el.closest('.accessory-parts')) {
      offset = 26;
      offsetMobile = 16;
      mobileSpaceBetween = 24;
    }

    if (el.closest('.popular-products') || el.closest('.sellout ') || el.closest('.you-watched') || el.closest('.might-like')|| el.closest('.similar-goods') || el.closest('.series-goods') || el.closest('.accessory-parts')) {
      isAllowTouchMove = false;
    }

    if (!el.classList.contains('is-initialized')) {
      el.classList.add('is-initialized');

      const swiper = el.querySelector('[data-swiper="slider-cards"]');
      // eslint-disable-next-line
      new Swiper(swiper, {
        speed: 500,
        slidesPerView: 'auto',
        slidesPerGroupAuto: true,
        breakpoints: {
          320: {
            spaceBetween: mobileSpaceBetween,
            slidesOffsetBefore: offsetMobile,
          },
          768: {
            spaceBetween: 16,
            slidesOffsetBefore: offset,
            allowTouchMove: true,
          },
          1024: {
            spaceBetween: 24,
            slidesOffsetBefore: 0,
            allowTouchMove: isAllowTouchMove,
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
window.sliderCards = sliderCards;


export {sliderCards};

// слайдер внутри карточки товара каталога и слайдера
import {createGridHover} from '../../utils/create-grid-hover';
import {switchSlideHoverMouse} from '../../utils/switch-slide-hover-mouse';

const sliderInCard = () => {
  const swipers = document.querySelectorAll('[data-swiper="product-card"] .swiper');
  if (!swipers.length) {
    return;
  }

  const productCard = document.querySelectorAll('[data-swiper="product-card"]');

  swipers.forEach((swiper, index) => {
    if (!swiper.classList.contains('is-initialized')) {
      swiper.classList.add('is-initialized');
      // eslint-disable-next-line
      const swiperInstance = new Swiper(swiper, {
        speed: 500,
        grabCursor: true,
        slidesPerView: 'auto',
        pagination: {
          clickable: true,
          el: productCard[index].querySelector('.product-card__swiper-pagination'),
        },
      });

      productCard[index].swiperInstance = swiperInstance;
    }
  });

  // for (let swiper of swipers) {

  // }

  // создает сетку для переключения слайдов по ховеру
  createGridHover(productCard);

  // переключает слайд, эмулирует клик по булету слайдера
  switchSlideHoverMouse(productCard);
};

// для бэкенда: инициализирует слайдер внутри карточки товара каталога и слайдера
window.sliderInCard = sliderInCard;

export {sliderInCard};

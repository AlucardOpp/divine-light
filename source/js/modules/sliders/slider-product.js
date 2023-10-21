// слайдер продукта

const productSlidersWrapper = document.querySelectorAll('.product-slider');

const sliderProduct = () => {

  if (!productSlidersWrapper.length) {
    return;
  }

  productSlidersWrapper.forEach((slider) => {
    const containerThumbs = slider.querySelector('.product-slider__thumbs');
    const prevSlideButton = slider.querySelector('.slider-controls__button-prev');
    const nextSlideButton = slider.querySelector('.slider-controls__button-next');
    const container = slider.querySelector('[data-slider-product="product-slider"]');

    const swiper = new Swiper(container, {
      slidesPerView: 'auto',
      speed: 500,
      pagination: {
        clickable: true,
        el: container.querySelector('.product-slider__swiper-pagination'),
      },
      thumbs: {
        swiper: {
          el: containerThumbs,
          slidesPerView: 'auto',
          direction: 'vertical',
        },
      },
      navigation: {
        nextEl: nextSlideButton,
        prevEl: prevSlideButton,
      },
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 5,
      },
      on: {
        // eslint-disable-next-line
        slideChange: function () {
          this.slides.forEach((slide) => {
            const videoIframe = slide.querySelector('.video video');
            if (videoIframe) {
              videoIframe.pause();
            }
          });
        },
      },
    });
  });
};

export {sliderProduct};

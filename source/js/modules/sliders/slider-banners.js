const banners = document.querySelector('.banners');

const sliderBanners = () => {
  if (!banners) {
    return;
  }

  const swiper = banners.querySelector('.swiper');

  const slider = new Swiper(swiper, {
    slidesPerView: 'auto',
    spaceBetween: 8,
    watchOverflow: true,
    navigation: {
      nextEl: '.banners__swiper-button-next',
      prevEl: '.banners__swiper-button-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 16,
        slidesPerView: 'auto',
      },
      1024: {
        spaceBetween: 24,
        slidesPerView: 'auto',
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  });
};

export {sliderBanners};

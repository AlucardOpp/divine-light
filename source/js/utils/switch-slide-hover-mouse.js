// переключает слайд, эмулирует клик по булету слайдера
const switchSlideHoverMouse = (swipers) => {
  const grids = document.querySelectorAll('[data-grid-hover="parrent"]');

  if (!grids.length) {
    return;
  }

  swipers.forEach((swiper) => {
    const gridItem = swiper.querySelectorAll('[data-grid-hover="item"]');
    let interval;

    gridItem.forEach((el, i) => {
      el.addEventListener('mouseover', () => {
        clearInterval(interval);
        // eslint-disable-next-line max-nested-callbacks
        interval = setInterval(() => {
          swiper.swiperInstance.slideTo(i)
        }, 100);
      });
    });

    // в создании swaiper нужно записать: pagination: {clickable: true, el: '.swiper-pagination'}
  });
};

export {switchSlideHoverMouse};

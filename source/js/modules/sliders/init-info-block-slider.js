const containerInfoSlider = document.querySelector('.info-block');
const breakpoint = window.matchMedia('(max-width: 1023px)');

const initInfoBlockSlider = () => {
  // if (!containerInfoSlider) {
  //   return;
  // }

  // const breakpointChecker = () => {
  //   if (breakpoint.matches) {
  //     // eslint-disable-next-line
  //     const slider = new Swiper(containerInfoSlider, {
  //       slidesPerView: 'auto',
  //       wrapperClass: 'info-block__list',
  //       slideClass: 'info-block__item',
  //     });
  //   }
  // };

  // breakpoint.addListener(breakpointChecker);
  // breakpointChecker();
};

export {initInfoBlockSlider};

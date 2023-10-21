const mightLikeFilters = (item) => {
  if (!item) {
    return;
  } else if (item.classList.contains('is-initialized')) {
    return;
  }
  item.classList.add('is-initialized');

  // eslint-disable-next-line
  const swiper = new Swiper(item, {
    slidesPerView: 'auto',
    spaceBetween: 8,
    speed: 500,
  });
};

const initMightLikeSliders = () => {
  const mightLikeSliders = document.querySelectorAll('.might-like__filters-swiper');

  for (let el of mightLikeSliders) {
    mightLikeFilters(el);
  }
};

// для бекенда
window.mightLikeFilters = mightLikeFilters;

export {initMightLikeSliders};

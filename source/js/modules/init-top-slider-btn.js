const btns = document.querySelectorAll('.top-slider__button');
const breadcrumbs = document.querySelector('.breadcrumbs');

const removeActiveClass = () => {
  btns.forEach((btn) => {
    btn.classList.remove('is-active');
  });
};

const initTopSliderBtn = () => {
  if (!btns && !breadcrumbs) {
    return;
  }

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const activeButtons = document.querySelectorAll('.top-slider__button.is-active');
      if (activeButtons) {
        removeActiveClass();
      }

      if (!btn.classList.contains('is-active')) {
        btn.classList.add('is-active');

        if (!breadcrumbs.classList.contains('is-active')) {
          breadcrumbs.classList.add('is-active');
        }
      }
    });
  });
};

export {initTopSliderBtn};

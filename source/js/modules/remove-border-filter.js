const filters = document.querySelector('.j-filters');
const breakpoint = window.matchMedia('(max-width:1023px)');

const breakpointChecker = () => {
  const buttons = filters.querySelectorAll('[data-accordion="button"]');

  if (breakpoint.matches) {
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const parent = btn.closest('[data-accordion="parent"]');
        const element = btn.closest('[data-accordion="element"]');

        setTimeout(() => {
          if (element.classList.contains('is-active')) {
            parent.classList.add('is-active');
          } else {
            parent.classList.remove('is-active');
          }
        }, 100);
      });
    });
  } else {
    return;
  }
};

const removeBorderFilter = () => {
  if (!filters) {
    return;
  }

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {removeBorderFilter};

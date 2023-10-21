const closeButton = document.querySelector('.filter-select-list .j-close');
const breakpoint = window.matchMedia('(max-width:767px)');
const list = document.querySelector('.filter-select-list');

const breakpointChecker = () => {
  closeButton.addEventListener('click', () => {
    if (list.classList.contains('is-open')) {
      list.classList.remove('is-open');
    }
  });
};

const closeFilterSelectList = () => {
  if (!closeButton) {
    return;
  }

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {closeFilterSelectList};

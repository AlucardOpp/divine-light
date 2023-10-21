const toggle = document.querySelector('.filter-select-list__button');
const breakpoint = window.matchMedia('(max-width:767px)');
const list = document.querySelector('.filter-select-list__list');
const closeBtn = document.querySelector('.filter-select-list .j-close');
const filterItems = document.querySelectorAll('.filter-select-list__item');
const showBtn = document.querySelector('.filter-select-list__btn-show');

const initScrollLock = () => {
  if (!toggle) {
    return;
  }
  const parent = toggle.closest('.filter-select-list');

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      toggle.addEventListener('click', () => {
        if (parent.classList.contains('is-open')) {
          window.disableBodyScroll(list);

          closeBtn.addEventListener('click', () => {
            window.enableBodyScroll(list);
          });
          filterItems.forEach((item) => {
            item.addEventListener('click', () => {
              window.enableBodyScroll(list);
            });
          });
          showBtn.addEventListener('click', () => {
            window.enableBodyScroll(list);
          });
        }
      });
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initScrollLock};

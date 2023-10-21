const toggle = document.querySelector('.j-filters-toggle');
const breakpoint = window.matchMedia('(max-width:1023px)');

const initFiltersToggle = () => {
  if (!toggle) {
    return;
  }

  const filters = document.querySelector('.j-filters');
  const closeButtons = document.querySelectorAll('.j-filters .j-close');
  const content = document.querySelector('.catalog-checkbox-content--mobile');
  const showBtn = document.querySelector('.j-show-btn');
  const back = document.querySelector('.catalog-checkbox-content--mobile .j-back');
  const form = document.querySelector('.filters__form form');

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      toggle.addEventListener('click', () => {
        if (!filters.classList.contains('is-active')) {
          filters.classList.add('is-active');
          window.disableBodyScroll(form);

          closeButtons.forEach((close) => {
            close.addEventListener('click', () => {
              filters.classList.remove('is-active');
              showBtn.classList.remove('is-active');
              window.enableBodyScroll(form);
              // eslint-disable-next-line max-nested-callbacks
              setTimeout(() => {
                form.scrollTo(0, 0);
                content.scrollTo(0, 0);
              }, 500);

              if (content.classList.contains('is-active')) {
                content.classList.remove('is-active');
                // eslint-disable-next-line max-nested-callbacks
                setTimeout(() => {
                  form.scrollTo(0, 0);
                }, 500);
              }
            });
          });

          showBtn.addEventListener('click', () => {
            if (!showBtn.classList.contains('is-active')) {
              showBtn.classList.add('is-active');
              content.classList.add('is-active');
              window.enableBodyScroll(form);
              setTimeout(() => {
                form.scrollTo(0, 0);
              }, 500);

              back.addEventListener('click', () => {
                showBtn.classList.remove('is-active');
                content.classList.remove('is-active');
                window.disableBodyScroll(form);
                // eslint-disable-next-line max-nested-callbacks
                setTimeout(() => {
                  content.scrollTo(0, 0);
                }, 500);
              });
            }
          });
        }
      });
    } else {
      return;
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initFiltersToggle};

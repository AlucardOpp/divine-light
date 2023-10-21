const initMoreFilters = () => {
  const filterModal = document.querySelector('.modal--filter');

  if (!filterModal) {
    return;
  }

  const breakpoint = window.matchMedia('(max-width:1023px)');
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      window.modals.close('filter');
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initMoreFilters};

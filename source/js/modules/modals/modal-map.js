const modalName = 'map';
const breakpoint = window.matchMedia('(max-width:767px)');

const breakpointChecker = () => {
  if (!breakpoint.matches) {
    window.modals.close(modalName);
  }
};

const onOpenMapModal = () => {
  breakpoint.addListener(breakpointChecker);
};

const onCloseMapModal = () => {
  breakpoint.removeListener(breakpointChecker);
};

export {onOpenMapModal, onCloseMapModal};

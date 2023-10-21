import {ScrollLock} from '../utils/scroll-lock';
import {tabs} from './init-tabs';

const header = document.querySelector('.header');
const catalogBtn = document.querySelector('.header__catalog-btn');
const tabControls = document.querySelectorAll('.header-catalog .tabs__control');
const tabElements = document.querySelectorAll('.header-catalog .tabs__element');
// const tabElements = catalogTabs.querySelectorAll('.header-catalog__content-inner');
const breakpoint = window.matchMedia('(max-width: 1023px)');
const breakpointMob = window.matchMedia('(max-width: 767px)');
const pb = 3;
const mobFixMenu = 64;

const scrollLock = new ScrollLock();

const onHoverOpenBtn = (evt) => {
  if (evt.target.closest('.header__catalog-btn') && !header.classList.contains('is-catalog-open')) {
    header.classList.add('is-catalog-open');
    scrollLock.disableScrolling();
  } else if (!evt.target.closest('.header__catalog-btn') && !evt.target.closest('.header-catalog__menu')) {
    if (header.classList.contains('is-catalog-open')) {
      header.classList.remove('is-catalog-open');
      scrollLock.enableScrolling();
    }
  }
};

const breakpointChecker = () => {
  if (!catalogBtn) {
    return;
  }

  const mapModal = document.querySelector('.modal-contacts__map-wrp');

  setStyles();
  window.addEventListener('resize', setStyles);
  window.addEventListener('click', clickHandles);

  if (tabControls.length) {
    tabControls.forEach((tabControl) => {
      tabControl.addEventListener('mouseenter', showTabContent);
    });
  }

  if (!breakpoint.matches) {
    // window.addEventListener('mouseover', onHoverOpenBtn);

    if (header.classList.contains('is-menu-open')) {
      header.classList.remove('is-menu-open');
    }

    if (header.classList.contains('is-submenu-open')) {
      header.classList.remove('is-submenu-open');
    }

    if (mapModal.classList.contains('is-open')) {
      mapModal.classList.remove('is-open');
    }
  } else {
    window.removeEventListener('mouseover', onHoverOpenBtn);
  }
};

const showTabContent = (evt) => {
  if (!breakpoint.matches) {
    let flag = false;

    if (!flag) {
      tabs.openTab(evt.target);

      flag = true;
    }
  }
};

const clickHandles = (evt) => {
  const headerCatalog = header.querySelector('.header-catalog');
  const headerCatalogContentWrp = headerCatalog.querySelector('.header-catalog__content-wrp');
  const headerCatalogMenu = header.querySelector('.header-catalog__menu');
  const submenuLinks = header.querySelectorAll('.js-submenu-open');
  const backBtns = header.querySelectorAll('.js-menu-back');
  const closeBtns = header.querySelectorAll('.js-menu-close');
  const mapBtn = document.querySelector('.js-show-map');
  const mapModal = document.querySelector('.modal-contacts__map-wrp');
  const closeMapModal = document.querySelector('.modal-contacts__map-close-btn');

  if (evt.target.closest('.header__catalog-btn') === catalogBtn) {
    if (header.classList.contains('is-catalog-open')) {
      header.classList.remove('is-catalog-open');
      scrollLock.enableScrolling();
    } else {
      header.classList.add('is-catalog-open');
      scrollLock.disableScrolling();
    }
  } else if ((evt.target.closest('.header-catalog') && !evt.target.closest('.header-catalog__menu')) && !breakpoint.matches) {
    if (header.classList.contains('is-catalog-open')) {
      header.classList.remove('is-catalog-open');
      scrollLock.enableScrolling();
    }
  }

  if (breakpoint.matches) {
    tabControls.forEach((control) => {
      if (evt.target.closest('.tabs__control') === control) {
        header.classList.add('is-menu-open');
      }
    });

    submenuLinks.forEach((link) => {
      if (evt.target.closest('.js-submenu-open') === link) {
        header.classList.add('is-submenu-open');
        link.nextElementSibling.classList.add('is-open');
      }
    });

    backBtns.forEach((backbtn) => {
      if (evt.target.closest('.js-menu-back') === backbtn) {
        if (header.classList.contains('is-submenu-open')) {
          header.classList.remove('is-submenu-open');
          backbtn.closest('.header-catalog__filter-list-wrp').classList.remove('is-open');
        } else {
          header.classList.remove('is-menu-open');
          setTimeout(() => {
            headerCatalogContentWrp.scrollTo(0, 0);
          }, 300);
        }
      }
    });

    closeBtns.forEach((closebtn) => {
      if (evt.target.closest('.js-menu-close') === closebtn) {
        if (header.classList.contains('is-catalog-open')) {
          header.classList.remove('is-catalog-open');
        }

        if (header.classList.contains('is-menu-open')) {
          header.classList.remove('is-menu-open');
        }

        if (header.classList.contains('is-submenu-open')) {
          header.classList.remove('is-submenu-open');
        }

        scrollLock.enableScrolling();
      }
    });
  }

  if (breakpoint.matches) {
    if (evt.target.closest('.js-show-map') === mapBtn) {
      mapModal.classList.add('is-open');
    }
  }

  if (breakpoint.matches) {
    if (evt.target.closest('.modal-contacts__map-close-btn') === closeMapModal) {
      mapModal.classList.remove('is-open');
    }
  }
};

const setStyles = () => {
  const headerCatalog = header.querySelector('.header-catalog');
  const headerCatalogContentWrp = headerCatalog.querySelector('.header-catalog__content-wrp');
  const headerCatalogControls = headerCatalog.querySelector('.tabs__controls');
  const modalCityGrid = document.querySelector('.modal-city__list');
  const modalCityItem = document.querySelectorAll('.modal-city__item');
  const modalNavbars = document.querySelectorAll('.js-navbar');
  let pt = catalogBtn.getBoundingClientRect().bottom + pb;
  let maxHeight = document.documentElement.clientHeight - pt;
  let gridCol = 3;

  modalNavbars.forEach((bar) => {
    bar.nextElementSibling.style.maxHeight = 'calc(100% - ' + bar.offsetHeight + 'px + 1px)';
  });

  if (!breakpoint.matches) {
    headerCatalog.style.paddingTop = pt + 'px';
    headerCatalogControls.style.maxHeight = maxHeight + 'px';
    headerCatalogContentWrp.style.height = maxHeight + 'px';
    tabElements.forEach((tab) => {
      tab.style.maxHeight = maxHeight + 'px';
    });
  } else {
    headerCatalog.style.paddingTop = mobFixMenu + 'px';
    headerCatalogControls.style.maxHeight = null;
    headerCatalogContentWrp.style.height = null;
    tabElements.forEach((tab) => {
      tab.style.maxHeight = null;
    });
  }

  if (!breakpointMob.matches) {
    modalCityGrid.style.gridTemplateRows = 'repeat(' + (modalCityItem.length / gridCol) + ',1fr)';
  } else {
    modalCityGrid.style.gridTemplateRows = null;
  }

  // if (breakpoint.matches) {
  //   tabElements.forEach((el) => {
  //     let bar = el.querySelector('.mobile-navbar');

  //     if (bar) {
  //       el.style.paddingTop = bar.scrollHeight + 'px';
  //     }
  //   });
  // } else {
  //   tabElements.forEach((el) => {
  //     el.style.paddingTop = null;
  //   });
  // }
};

const initHeaderActions = () => {
  breakpointChecker();
  breakpoint.addListener(breakpointChecker);
  breakpointMob.addListener(breakpointChecker);
};

export {initHeaderActions};

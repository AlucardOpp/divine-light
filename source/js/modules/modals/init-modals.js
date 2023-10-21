import {Modals} from './modals';
import {onOpenPointGallery, onClosePointGallery} from '../sliders/init-point-gallery';
import {onOpenMapModal, onCloseMapModal} from './modal-map';

let modals;

// Здесь реализован пример открытия модалки через колбэк закрытия
// const openModalInCloseCallback = (name, context = this) => {
//   context._enableScrolling = false;
//   context._setSettings('default');
//   modals.open(name);
// };

// closeCallback() {
//   openModalInCloseCallback('modal-5');
// },

const focusField = () => {
  const input = document.querySelector(`[data-modal].is-active input`);
  setTimeout(() => {
    input.focus();
  }, 500);
};

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: false,
  },
  'point-gallery': {
    openCallback: (evt) => onOpenPointGallery(evt),
    closeCallback: onClosePointGallery,
  },
  'map': {
    openCallback: onOpenMapModal,
    closeCallback: onCloseMapModal,
  },
  'authorization': {
    openCallback: focusField,
  },
  'modal-cheap': {
    openCallback: focusField,
  },
};

const initModals = () => {
  const modalElements = document.querySelectorAll('.modal');
  if (modalElements.length) {
    modalElements.forEach((el) => {
      setTimeout(() => {
        el.classList.remove('modal--preload');
      }, 100);
    });
  }

  modals = new Modals(settings);
  // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда
  window.modals = modals;
};

export {modals, initModals};

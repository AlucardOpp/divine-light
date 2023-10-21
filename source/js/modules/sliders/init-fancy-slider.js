import {Fancybox} from './../../vendor/fancybox';

let selector;

const deliveryPointSlider = (sliders) => {
  sliders.forEach((slider) => {
    const swiper = new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 8,
    });
  });
};

const initFancybox = (gallery) => {
  Fancybox.bind(gallery, {
    animated: false,
    showClass: false,
    hideClass: false,
    closeButton: 'inside',
    dragToClose: false,
    startIndex: 0,
    groupAll: true,

    Image: {
      zoom: false,
      fit: 'cover',
    },

    Carousel: {
      on: {
        selectSlide: () => {
          document.querySelector('.fancybox__carousel').classList.add('fancybox__carousel--gallery');
        },
      },
    },
    Thumbs: false,
    Toolbar: false,

    on: {
      done: () => {
        window.disableBodyScroll();
      },
      destroy: () => {
        window.enableBodyScroll();
      },
    },
  });
};

const initGalleryFancybox = () => {
  const sliders = document.querySelectorAll('.delivery-point__slider');
  const slidersUserImg= document.querySelectorAll('.fancybox-img');

  if (!sliders || !slidersUserImg) {
    return;
  }

  deliveryPointSlider(sliders);
  deliveryPointSlider(slidersUserImg);

  sliders.forEach((slider, index) => {
    selector = '.delivery-point__slider--' + (index + 1) + ' ' + '.swiper-slide';
    slider.classList.add('delivery-point__slider--' + (index + 1));

    initFancybox(selector);
  });

  slidersUserImg.forEach((slider, index) => {
    selector = '.fancybox-img--' + (index + 1) + ' ' + '.swiper-slide';
    slider.classList.add('fancybox-img--' + (index + 1));

    initFancybox(selector);
  });
};

export {initGalleryFancybox};

const modal = document.querySelector('.modal-point-gallery');
let slider = false;

const initPointGallery = (index = 0) => {
  if (!modal) {
    return;
  }

  const modalSlider = modal.querySelector('.swiper');

  slider = new Swiper(modalSlider, {
    slidesPerView: 1,
    initialSlide: index,
    allowTouchMove: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

const onOpenPointGallery = (evt) => {
  if (!modal) {
    return;
  }

  const parent = evt.target.closest('.swiper-wrapper');
  const list = parent.querySelectorAll('.swiper-slide');
  const modalWrapper = modal.querySelector('.swiper-wrapper');
  const slideModal = modal.querySelector('.swiper-slide');
  const pictures = [...list].map((item) => {
    return item.querySelector('picture').cloneNode(true);
  });
  const index = [...list].indexOf(evt.target.closest('.swiper-slide'));

  modalWrapper.innerHTML = '';
  pictures.forEach((picture) => {
    const slideClone = slideModal.cloneNode();
    modalWrapper.appendChild(slideClone);
    slideClone.appendChild(picture);
  });

  initPointGallery(index);
};


const onClosePointGallery = () => {
  if (slider) {
    setTimeout(() => {
      slider.destroy();
    }, 300);
  }
};

export {initPointGallery, onOpenPointGallery, onClosePointGallery};

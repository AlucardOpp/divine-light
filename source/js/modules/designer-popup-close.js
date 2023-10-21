const closeButtons = document.querySelectorAll('.designer-card__close-btn');

const onButtonClick = ({target}) => {
  const popup = target.closest('.designer-card__popup');
  popup.classList.add('hidden');

  setTimeout(() => {
    popup.classList.remove('hidden');
  }, 300);
};

const initCloseDesignerPopup = () => {
  if (!closeButtons.length) {
    return;
  }

  closeButtons.forEach((button) => {
    button.addEventListener('click', onButtonClick);
  });
};

export {initCloseDesignerPopup};

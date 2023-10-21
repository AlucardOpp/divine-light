const initBasketInput = () => {
  const basketInputWrap = document.querySelector('.basket-menu__input');

  if (!basketInputWrap) {
    return;
  }

  const basketInput = basketInputWrap.querySelector('input');

  basketInput.addEventListener('focus', (e) => {
    basketInputWrap.classList.add('active');
  });

  basketInput.addEventListener('blur', (e) => {
    if (!basketInput.value) {
      basketInputWrap.classList.remove('active');
    }
  });
};

export {initBasketInput};

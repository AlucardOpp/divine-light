const addBasket = document.querySelector('.product-info__add-basket');

const initShowCounter = () => {

  if (!addBasket) {
    return;
  }

  const counterBlock = document.querySelector('.product-info__counter-block');

  function showCounter() {
    addBasket.classList.add('is-hide');
    counterBlock.classList.add('is-open');
  }

  addBasket.addEventListener('click', showCounter);
};

export {initShowCounter};

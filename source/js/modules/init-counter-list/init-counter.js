// инициализирует счетчик

import {counterСhange} from './counter-change';
import {changeDisabledBatton} from './change-disabled-batton';

const initCounter = (counter) => {
  if (!counter) {
    return;
  }

  counter.classList.add('is-initialized');

  let maxQuantity = counter.querySelector('[data-counter-max-quantity]');
  let minQuantity = counter.querySelector('[data-counter-min-quantity]');
  const plus = counter.querySelector('[data-counter="plus"]');
  const minus = counter.querySelector('[data-counter="minus"]');
  const quantity = counter.querySelector('[data-counter="quantity-products"]');
  const productInfo = document.querySelector('.product-info');
  const addBasket = document.querySelector('.product-info__add-basket');
  const counterBlock = document.querySelector('.product-info__counter-block');


  if (maxQuantity) {
    maxQuantity = +maxQuantity.dataset.counterMaxQuantity;
  }

  if (minQuantity) {
    minQuantity = +minQuantity.dataset.counterMinQuantity;
  }

  changeDisabledBatton({quantity, limit: maxQuantity, batton: plus});
  changeDisabledBatton({quantity, limit: minQuantity, batton: minus});

  counter.addEventListener('click', (evt) => {
    counterСhange({evt, quantity, maxQuantity, minQuantity, plus, minus});

    if (productInfo && minus.hasAttribute('disabled')) {
      addBasket.classList.remove('is-hide');
      counterBlock.classList.remove('is-open');
      const productInfoCounter = productInfo.querySelector('.counter__quantity-products');
      productInfoCounter.textContent = '1';
      minus.removeAttribute('disabled');
    }
  });
};

export {initCounter};

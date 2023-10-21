// изменяет состояние в счетчике

import {changeDisabledBatton} from './change-disabled-batton';
import {isQuantityEqualLimit} from './is-quantity-equal-limit';

const counterСhange = ({evt, quantity, maxQuantity, minQuantity, plus, minus}) => {
  const addProduct = () => (quantity.textContent = +quantity.textContent + 1);
  const removeProduct = () => (quantity.textContent = +quantity.textContent - 1);

  if (evt.target.closest('[data-counter="minus"]')) {
    if (isQuantityEqualLimit({limit: minQuantity, quantity})) {
      return;
    }
    removeProduct();
    changeDisabledBatton({quantity, limit: maxQuantity, batton: plus});
    changeDisabledBatton({quantity, limit: minQuantity, batton: minus});
  }

  if (evt.target.closest('[data-counter="plus"]')) {
    if (isQuantityEqualLimit({limit: maxQuantity, quantity})) {
      return;
    }
    addProduct();
    changeDisabledBatton({quantity, limit: maxQuantity, batton: plus});
    changeDisabledBatton({quantity, limit: minQuantity, batton: minus});
  }
};

export {counterСhange};

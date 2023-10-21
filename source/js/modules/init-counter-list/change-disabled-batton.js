// disabled кнопку плюс если счетчик равен
// максимальному лимиту и enabled если меньше

import {isQuantityEqualLimit} from './is-quantity-equal-limit';

const isDisabledBatton = (limit, quantity) => isQuantityEqualLimit({limit, quantity});

const changeDisabledBatton = ({quantity, limit, batton}) => {
  if (isDisabledBatton(limit, quantity)) {
    batton.disabled = true;
  } else {
    batton.disabled = false;
  }
};

export {changeDisabledBatton};

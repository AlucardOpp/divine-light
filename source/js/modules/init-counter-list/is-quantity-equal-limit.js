// проверяет является ли количество равным лимиту

const isQuantityEqualLimit = ({limit, quantity}) => {
  if (limit !== 0 && !limit) {
    return false;
  }

  return +quantity.textContent === limit;
};

export {isQuantityEqualLimit};

// увеличивает / уменьшает / скрывает / показыкает счетчик в карточке товара

const cardCounter = () => {
  document.addEventListener('click', (evt) => {

    const parrent = evt.target.closest('[data-toggle-show-or-hidden="parrent"');
    if (!parrent) {
      return;
    }

    // отключает переход по ссылке: "купить", "под заказ"
    if (evt.target.closest('[data-prevent-default="on"]')) {
      evt.preventDefault();
    }

    const counter = parrent.querySelector('[data-toggle-show-or-hidden="counter"]');
    const buttonPlus = parrent.querySelector('[data-toggle-show-or-hidden="button-plus"]');
    const maxLimit = parrent.querySelector('[data-counter-max-limin]');
    const counterValue = parseInt(counter.textContent, 10);
    const units = counter.hasAttribute('data-no-units') ? '' : 'шт.';
    const isClickButtonPlus = () => (!!evt.target.closest('[data-toggle-show-or-hidden="button-plus"]'));
    const isClickButtonMinus = () => (!!evt.target.closest('[data-toggle-show-or-hidden="button-minus"]'));
    const isClickButtonCounterShow = () => (!!evt.target.closest('[data-toggle-show-or-hidden="button-show"]'));
    const addProduct = () => (counter.textContent = `${counterValue + 1} ${units}`);
    const removeProduct = () => (counter.textContent = `${counterValue - 1} ${units}`);
    const showCounter = () => parrent.classList.add('is-open');
    const hiddenCounter = () => parrent.classList.remove('is-open');
    const isCounterEualsMaxLimit = () => (maxLimit && (counterValue + 1 === +maxLimit.dataset.counterMaxLimin));
    const buttonPlusDisabled = () => (buttonPlus.disabled = true);
    const buttonPlusEnabled = () => (buttonPlus.disabled = false);

    if (isClickButtonCounterShow()) {
      showCounter();
      addProduct();
    }

    if (isClickButtonPlus()) {
      addProduct();

      if (isCounterEualsMaxLimit()) {
        buttonPlusDisabled();
      }
    }

    if (isClickButtonMinus()) {
      if (counterValue === 1) {
        hiddenCounter();
      }

      removeProduct();
      buttonPlusEnabled();
    }
  });
};

export {cardCounter};

const radioButtons = (parent) => {
  // на родителе: radio-buttons="parent"
  // на элементах: radio-buttons="element"

  if (!parent) {
    return;
  } else {
    if (parent.classList.contains('is-initialized')) {
      return;
    }
    parent.classList.add('is-initialized');
  }

  const removeActiveClass = () => {
    const elementsList = parent.querySelectorAll('[radio-buttons="element"]');
    for (let element of elementsList) {
      element.classList.remove('is-active');
    }
  };

  parent.addEventListener('click', (evt) => {
    evt.preventDefault();
    const isClickElement = () => (!!evt.target.closest('[radio-buttons="element"]'));

    if (isClickElement()) {
      const element = evt.target.closest('[radio-buttons="element"]');
      removeActiveClass();

      if (!element.classList.contains('is-active')) {
        element.classList.add('is-active');
      }
    }
  });
};

const initRadioButtons = () => {
  const radioButtonsList = document.querySelectorAll('[radio-buttons="parent"]');

  for (let item of radioButtonsList) {
    radioButtons(item);
  }
};

// для бэка
window.initRadioButtons = initRadioButtons;

export {initRadioButtons};

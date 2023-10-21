// если в инпуте есть значение на родителе появляется класс is-value, иначе класс удается

const frizeLabel = (parent) => {
  if (!parent && parent.classList.contains('is-initialized')) {
    return;
  } else {
    parent.classList.add('is-initialized');
  }

  parent.addEventListener('input', (evt) => {
    const input = evt.target.closest('[data-frize-label="input"]');
    if (input && input.value !== '') {
      parent.classList.add('is-value');
    } else {
      parent.classList.remove('is-value');
    }
  });

  // при отправки формы со всех инпутов снимается класс is-value
  document.addEventListener('click', (evt) => {
    const form = evt.target.closest('form');
    if (!form) {
      return;
    } else if (form.classList.contains('frize-label-is-initialized-js')) {
      return;
    }

    form.classList.add('frize-label-is-initialized-js');

    form.addEventListener('submit', () => {
      const TIME_DELETE_CLASS = 1200;
      const customInputList = form.querySelectorAll('.custom-input');
      for (let item of customInputList) {
        item.classList.remove('custom-input--filled'); // удаляет наследие от другово автора
        if (!item.classList.contains('is-invalid') && item.value === '') {
          const inputIsValueClass = item.querySelector('.is-value');
          setTimeout(() => (inputIsValueClass.classList.remove('is-value')), TIME_DELETE_CLASS);
        }
      }
    });
  });




};

const frizeLabelInit = () => {
  const parents = document.querySelectorAll('[data-frize-label="parent"]');
  for (let item of parents) {
    frizeLabel(item);
  }
};

// window сделан для бэкэнда
window.frizeLabelInit = frizeLabelInit;

export {frizeLabelInit};

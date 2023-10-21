const checkboxes = document.querySelectorAll('[data-show-control]');

const showInputOnChecked = () => {
  if (!checkboxes.length) {
    return;
  }

  checkboxes.forEach((checkbox) => {
    const dataValue = checkbox.dataset.showControl;
    const openedBlock = document.querySelector(`[data-show-input=${dataValue}]`);
    const input = openedBlock.querySelector('input');

    if (!openedBlock) {
      return;
    }

    checkbox.addEventListener('input', (evt) => {
      if (evt.target.checked) {
        openedBlock.style.height = openedBlock.scrollHeight + 'px';
        setTimeout(() => {
          input.focus();
        }, 200);
      } else {
        openedBlock.style.height = null;
      }
    });
  });
};

export {showInputOnChecked};

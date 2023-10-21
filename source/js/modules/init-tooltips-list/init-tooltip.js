// создает экземпляр для плагина TooltipJs

const initTooltip = (tooltip, options) => {
  if (!tooltip) {
    return;
  }

  const content = tooltip.querySelector('[data-tooltip="content"]');
  if (content) {
    content.classList.remove('visually-hidden');
  }

  // eslint-disable-next-line
  const btnClose = content.querySelector('.tooltip-content__button-close');
  const newTippy = tippy(tooltip, options);

  if (btnClose) {
    btnClose.addEventListener('click', () => {
      newTippy.hide();
    });
  }
};

export {initTooltip};

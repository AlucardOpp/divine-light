// функция отдает объект настроек или дефолтные настройки

import {customOptionsTooltip} from './custom-options-tooltip';

const getTooltipsOptions = (tooltip) => {
  const optionsDefault = {
    trigger: 'click',
    offset: [-24, 16],
    theme: 'custom-light',
    placement: 'bottom-start',
  };

  return customOptionsTooltip[tooltip.dataset.tooltipOptions] || optionsDefault;
};

export {getTooltipsOptions};

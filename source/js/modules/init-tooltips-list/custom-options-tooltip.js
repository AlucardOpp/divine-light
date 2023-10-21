// настройки для экземпляров плагина TooltipJs
// // вешаем на родителя, data-tooltip="parrent", data-tooltip-options="уникальное имя"
// // вешаем на всплывающую подсказку: data-tooltip="content"
// // побавляем в массив настройки, под ключем уникального имени

const customOptionsTooltip = {
  needInstallation: {
    offset: [-24, 16],
    theme: 'custom-light',
    placement: 'bottom-start',
  },
  alert: {
    offset: [-24, 16],
    theme: 'custom-alert',
    placement: 'bottom-start',
    trigger: 'click',
  },
  sale: {
    theme: 'custom-light',
    placement: 'bottom-start',
    trigger: 'click',
  },
  removeBasketItem: {
    trigger: 'click',
    offset: [-11, 16],
    theme: 'custom-light',
    placement: 'bottom-end',
  },
  designerCard: {
    offset: [11, 10],
    delay: [400, 1500], // ms
    theme: 'custom-light--designer-card',
    placement: 'bottom-end',
  },
  lowPrice: {
    trigger: 'click',
    theme: 'custom-big--very-big',
    placement: 'bottom-start',
    interactive: true,
    arrow: false,
    maxWidth: '' ,

  },
  rating: {
    trigger: 'click',
    theme: 'custom-big',
    placement: 'bottom',
    arrow: false,
  },
};

export {customOptionsTooltip};

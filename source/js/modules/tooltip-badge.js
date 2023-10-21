const tooltipsCatalog = document.querySelectorAll('[data-tooltip="sale-item"]');
const tooltipBusketQuestion = document.querySelector('[data-tooltip="question"');

const tooltipCatalogBadge = () => {
  if (!tooltipsCatalog.length) {
    return;
  }

  const texts = document.querySelectorAll('[data-tooltip="sale-item-content"]');

  tooltipsCatalog.forEach((el, index) => {
    texts[index].classList.remove('visually-hidden');
    // eslint-disable-next-line
    tippy(el, {
      trigger: 'click',
      content: texts[index],
      theme: 'custom-light',
      placement: 'bottom-start',
    });
  });

};

const tooltipBusketQuestionBadge = () => {
  if (!tooltipBusketQuestion) {
    return;
  }
  const text = document.querySelector('[data-tooltip="question-content"]');
  text.classList.remove('visually-hidden');
  // eslint-disable-next-line
  tippy(tooltipBusketQuestion, {
    trigger: 'mouseenter',
    content: text,
    theme: 'custom-light',
    placement: 'bottom-start',
    maxWidth: 200,
  });

};

export {tooltipCatalogBadge, tooltipBusketQuestionBadge};

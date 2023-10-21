// инициализирует список счетчиков на странице

import {initCounter} from './init-counter';

const initCounterList = () => {
  const countersList = document.querySelectorAll('[data-counter="parrent"]');
  if (!countersList.length) {
    return;
  }

  for (const counter of countersList) {
    if (!counter.classList.contains('is-initialized')) {
      initCounter(counter);
    }
  }
};

// для бэкенда
window.initCounterList = initCounterList;

export {initCounterList};

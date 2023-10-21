const initOpenMore = () => {
  const OpenMoreElement = document.querySelector('[data-open-more]');

  if (!OpenMoreElement) {
    return;
  }
  const btnElement = document.querySelector('[data-open-more-btn]');
  const extraText = document.querySelector('[data-open-more-text]');

  btnElement.addEventListener('click', () => {
    extraText.classList.add('is-open');
    btnElement.classList.add('is-hide');
  });
};

export {initOpenMore};

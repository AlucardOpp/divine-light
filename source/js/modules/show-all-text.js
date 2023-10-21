const showAllText = () => {

  const textExcerptElements = document.querySelectorAll('[data-text-excerpt]');
  const textAllElements = document.querySelectorAll('[data-all-text]');

  if (!textExcerptElements || !textAllElements) {
    return;
  }

  const btnsShowText = document.querySelectorAll('[data-show-text-btn]');
  const btnsHideText = document.querySelectorAll('[data-hide-text-btn]');

  btnsShowText.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      textAllElements[index].classList.remove('is-hide');
      textExcerptElements[index].classList.add('is-hide');
      btnsShowText[index].classList.add('is-hide');
      btnsHideText[index].classList.remove('is-hide');
    });
  });

  btnsHideText.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      textAllElements[index].classList.add('is-hide');
      textExcerptElements[index].classList.remove('is-hide');
      btnsHideText[index].classList.add('is-hide');
      btnsShowText[index].classList.remove('is-hide');
    });
  });
}

export {showAllText};

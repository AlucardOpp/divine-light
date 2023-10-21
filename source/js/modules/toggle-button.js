// добавляет / убирает класс is-active c кнопки по клику

const parrent = document.querySelector('[toggle-button]');
const toggleButton = () => {
  if (!parrent) {
    return;
  }

  document.addEventListener('click', (evt) => {
    const toggle = evt.target.closest('[toggle-button]');
    const sectionHeadingToggle = document.querySelector('.section-heading__button-more');

    if (toggle) {
      toggle.classList.toggle('is-active');
    }

    if (!sectionHeadingToggle) {
      return;
    } else if (sectionHeadingToggle.classList.contains('is-active') && !evt.target.classList.contains('section-heading__button-more')) {
      sectionHeadingToggle.classList.remove('is-active');
    }
  });
};

export {toggleButton};

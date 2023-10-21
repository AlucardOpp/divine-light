const initReadMore = () => {
  const readMoreElements = document.querySelectorAll('.read-more');

  if (readMoreElements.length) {
    readMoreElements.forEach((el) => {
      const btnElement = el.querySelector('.read-more__button');

      if (btnElement) {
        btnElement.addEventListener('click', (evt) => {
          evt.preventDefault();
          el.classList.toggle('is-open');
          document.activeElement.blur();
        });
      }
    });
  }
};

export {initReadMore};

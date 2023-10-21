const btn = document.querySelector('.product-reviews__button');

const initOpenMoreReviews = () => {

  if (!btn) {
    return;
  }

  const extraList = document.querySelectorAll('.product-reviews__review:nth-child(n+5)');

  function openList() {
    extraList.forEach((list) => {
      list.style.display = 'flex';
      btn.textContent = 'Свернуть отзывы';
      btn.classList.add('open');
    });
  }

  function closeList() {
    extraList.forEach((list) => {
      list.style.display = 'none';
      btn.textContent = 'Показать больше отзывов';
      btn.classList.remove('open');
    });
  }

  btn.addEventListener('click', () => {
    if (btn.classList.contains('open')) {
      closeList();
    } else {
      openList();
    }
  });
};

export {initOpenMoreReviews};

const btn = document.querySelector('.characteristics__button');

const initOpenBlock = () => {

  if (!btn) {
    return;
  }

  const breakpoint = window.matchMedia(`(max-width:767px)`);

  const extraList2 = document.querySelectorAll('.characteristics__list table:nth-child(n+5)');
  const extraList = document.querySelectorAll('.characteristics__list table:nth-child(n+3)');

  function openList() {
    if (breakpoint.matches) {
      extraList.forEach((table) => {
        table.style.display = 'table';
        btn.textContent = 'Свернуть характеристики';
        btn.classList.add('open');
      });
    } else {
      extraList2.forEach((table) => {
        table.style.display = 'table';
        btn.textContent = 'Свернуть характеристики';
        btn.classList.add('open');
      });
    }
  }

  function closeList() {
    if (breakpoint.matches) {
      extraList.forEach((table) => {
        table.style.display = 'none';
        btn.textContent = 'Развернуть характеристики';
        btn.classList.remove('open');
      });
    } else {
      extraList2.forEach((table) => {
        table.style.display = 'none';
        btn.textContent = 'Развернуть характеристики';
        btn.classList.remove('open');
      });
    }
  }

  btn.addEventListener('click', () => {
    if (btn.classList.contains('open')) {
      closeList();
    } else {
      openList();
    }
  });
};

export {initOpenBlock};

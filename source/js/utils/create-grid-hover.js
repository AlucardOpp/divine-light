// создает сетку для переключения слайдов по ховеру
const createGridHover = (parrents) => {
  const grids = document.querySelectorAll('[data-grid-hover="parrent"]');

  if (!grids.length) {
    return;
  }

  parrents.forEach((parrent) => {
    const grid = parrent.querySelector('[data-grid-hover="parrent"]');
    const gridItem = grid.querySelector('[data-grid-hover="item"]');

    const buletsCount = parrent.querySelectorAll('.swiper-pagination-bullet').length;
    Array(buletsCount - 1).fill('').forEach(() => {
      grid.appendChild(gridItem.cloneNode());
    });
  });
};

export {createGridHover};

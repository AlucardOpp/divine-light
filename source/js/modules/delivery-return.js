const breakpoint = window.matchMedia('(max-width:767px)');

const deliveryReturn = () => {
  const tableItems = document.querySelectorAll('.delivery-return__table-item');

  if (tableItems.length) {
    const breakpointChecker = () => {

      if (breakpoint.matches) {
        tableItems.forEach((elem) => {
          const prices = [...elem.querySelectorAll('.delivery-return__table-content--price')].map((el) => el.textContent);
          const description = [...elem.querySelectorAll('.delivery-return__table-content--description')].map((el) => el.innerHTML.toLowerCase());
          const string = '';
          if (prices.every((val) => val === prices[0])) {
            console.log(elem)

            const firstDescription = elem.querySelector('.delivery-return__table-content--description');
            firstDescription.classList.add('delivery-return__table-content--two-line');
            firstDescription.closest('.delivery-return__table-row').classList.add('delivery-return__table-row--two-lines');
            firstDescription.innerHTML = description.join(' или ');
            elem.querySelector('.delivery-return__table-row:nth-of-type(2)').classList.add('visually-hidden')
          }
        })
      }
    }

    // breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  }
};

export {deliveryReturn};

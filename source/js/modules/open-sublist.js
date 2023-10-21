const list = document.querySelector('.breadcrumbs__link--active');

const openSubList = () => {
  if (!list) {
    return;
  }

  const subList = document.querySelector('.breadcrumbs__sublist');
  const subLinks = document.querySelectorAll('.breadcrumbs__sublist-link');


  list.addEventListener('click', () => {
    subList.style.visibility = 'visible';
    subList.style.pointerEvents = 'auto';
  });

  // const closeSublist = () => {
  //   if (!subLinks && list) {
  //     subList.style.visibility = 'hidden';
  //     subList.style.pointerEvents = 'none';
  //   }
  // };

  subLinks.forEach((sublink) => {
    sublink.addEventListener('click', () => {
      subList.style.visibility = 'hidden';
      subList.style.pointerEvents = 'none';
    });
  });

  const onPopupEscPress = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      subList.style.visibility = 'hidden';
      subList.style.pointerEvents = 'none';
    }
  };

  document.addEventListener('keydown', onPopupEscPress);
  // document.addEventListener('click', closeSublist);
};

export {openSubList};

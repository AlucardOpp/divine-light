// в блоке Промо Кода, если клик был по полю инпут показывает кнопку иначе скрывает её

const promoCode = () => {
  const promoCodeSection = document.querySelector('[data-promo-code="parrent"]');
  if (!promoCodeSection) {
    return;
  }

  promoCodeSection.addEventListener('click', (evt) => {
    if (evt.target.closest('[data-promo-code="input"] input')) {
      promoCodeSection.classList.add('is-value');
    } else {
      promoCodeSection.classList.remove('is-value');
    }
  });
};

export {promoCode};

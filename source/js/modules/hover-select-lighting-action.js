const linkOverAction = (evt) => {
  if (evt.target.classList.contains('tabs-lighting__link')) {
    const link = evt.target;
    const imageNumber = link.dataset.image;
    const element = evt.target.parentElement.parentElement.parentElement.parentElement;
    const mainImage = element.querySelector('.tabs-lighting__image--main');
    const hoverImage = element.querySelector(`.tabs-lighting__image--hover[data-image="${imageNumber}"]`);
    mainImage.classList.add('is-hide');
    hoverImage.classList.add('is-show');
  }
};

const linkOutAction = (evt) => {
  if (evt.target.classList.contains('tabs-lighting__link')) {
    const link = evt.target;
    const imageNumber = link.dataset.image;
    const element = evt.target.parentElement.parentElement.parentElement.parentElement;
    const mainImage = element.querySelector('.tabs-lighting__image--main');
    const hoverImage = element.querySelector(`.tabs-lighting__image--hover[data-image="${imageNumber}"]`);
    mainImage.classList.remove('is-hide');
    hoverImage.classList.remove('is-show');
  }
};

const itemOverAction = (evt) => {
  if (evt.target.classList.contains('tabs-lighting__item')) {
    const link = evt.target.firstChild;
    const imageNumber = link.dataset.image;
    const element = evt.target.parentElement.parentElement.parentElement;
    const mainImage = element.querySelector('.tabs-lighting__image--main');
    const hoverImage = element.querySelector(`.tabs-lighting__image--hover[data-image="${imageNumber}"]`);
    mainImage.classList.add('is-hide');
    hoverImage.classList.add('is-show');
  }
};

const itemOutAction = (evt) => {
  if (evt.target.classList.contains('tabs-lighting__item')) {
    const link = evt.target.firstChild;
    const imageNumber = link.dataset.image;
    const element = evt.target.parentElement.parentElement.parentElement;
    const mainImage = element.querySelector('.tabs-lighting__image--main');
    const hoverImage = element.querySelector(`.tabs-lighting__image--hover[data-image="${imageNumber}"]`);
    mainImage.classList.remove('is-hide');
    hoverImage.classList.remove('is-show');
  }
};

const newOverAction = (evt) => {
  if (evt.target.classList.contains('tabs-lighting__new')) {
    const link = evt.target.parentElement;
    const imageNumber = link.dataset.image;
    const element = evt.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    const mainImage = element.querySelector('.tabs-lighting__image--main');
    const hoverImage = element.querySelector(`.tabs-lighting__image--hover[data-image="${imageNumber}"]`);
    mainImage.classList.add('is-hide');
    hoverImage.classList.add('is-show');
  }
};

const newOutAction = (evt) => {
  if (evt.target.classList.contains('tabs-lighting__new')) {
    const link = evt.target.parentElement;
    const imageNumber = link.dataset.image;
    const element = evt.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    const mainImage = element.querySelector('.tabs-lighting__image--main');
    const hoverImage = element.querySelector(`.tabs-lighting__image--hover[data-image="${imageNumber}"]`);
    mainImage.classList.remove('is-hide');
    hoverImage.classList.remove('is-show');
  }
};

const hoverSelectLightingAction = () => {
  document.addEventListener('mouseover', (evt) => {
    linkOverAction(evt);
    itemOverAction(evt);
    newOverAction(evt);
  });
  document.addEventListener('mouseout', (evt) => {
    linkOutAction(evt);
    itemOutAction(evt);
    newOutAction(evt);
  });
};

export {hoverSelectLightingAction};

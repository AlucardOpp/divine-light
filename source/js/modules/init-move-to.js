import MoveTo from '../vendor/moveTo';

const initMoveTo = () => {

  const moveTo = new MoveTo();
  const trigger = document.querySelectorAll('.js-trigger');
  trigger.forEach((item) => {
    moveTo.registerTrigger(item);
  });
};

export {initMoveTo};

import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initCustomSelect} from './modules/form/init-custom-select';
import {initFormValidate} from './modules/form/init-form-validate';
import {cardCounter} from './modules/card-counter';
import {toggleButton} from './modules/toggle-button';
import {initTabs} from './modules/init-tabs';
import {initAccordions} from './modules/init-accordion';
import {initHeaderActions} from './modules/init-header-actions';
import {initSliders} from './modules/sliders/init-sliders';
import {tooltipCatalogBadge, tooltipBusketQuestionBadge} from './modules/tooltip-badge';
import {initReadMore} from './modules/init-read-more';
import {initCloseDesignerPopup} from './modules/designer-popup-close';
import {hoverSelectLightingAction} from './modules/hover-select-lighting-action';
import {initUiSlider, initUiStepSlider} from './modules/init-ui-slider';
import {initFiltersToggle} from './modules/init-filters-toggle';
import {removeBorderFilter} from './modules/remove-border-filter';
import {initTopSlider} from './modules/sliders/init-top-slider';
import {initTopSliderBtn} from './modules/init-top-slider-btn';
import {closeFilterSelectList} from './modules/close-filter-select-list';
import {initScrollLock} from './modules/init-scroll-lock';
import {initTooltipsList} from './modules/init-tooltips-list/init-tooltips-list';
import {initCounterList} from './modules/init-counter-list/init-counter-list';
import {initRadioButtons} from './modules/init-radio-buttons';
import {initBasketInput} from './modules/init-basket-input';
import {initMoreFilters} from './modules/init-more-filters';
import {frizeLabelInit} from './modules/frize-label-init';
import {initMap} from './modules/map/init-map';
import {initGalleryFancybox} from './modules/sliders/init-fancy-slider';
import {promoCode} from './modules/promo-code';
import {showInputOnChecked} from './modules/show-input-on-checked';
import {sliderProduct} from './modules/sliders/slider-product';
import {initOpenBlock} from './modules/init-open-block';
import {deliveryReturn} from "./modules/delivery-return";
import {initRangeSlider} from './modules/init-range-slider';
import {initShowCounter} from './modules/init-show-counter';
import {initInfoBlockSlider} from './modules/sliders/init-info-block-slider';
import {initOpenMore} from './modules/init-open-more';
import {showAllText} from './modules/show-all-text';
// import {openSubList} from './modules/open-sublist';
import {initOpenMoreReviews} from './modules/init-open-more-reviews';
import {initMoveTo} from './modules/init-move-to';
import {sliderList} from './modules/sliders/slider-list';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  cardCounter();
  toggleButton();
  initTabs();
  initAccordions();


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initCustomSelect();
    initFormValidate();
    initSliders();
    initHeaderActions();
    tooltipCatalogBadge();
    tooltipBusketQuestionBadge();
    initReadMore();
    initCloseDesignerPopup();
    hoverSelectLightingAction();
    initUiSlider();
    initUiStepSlider();
    initFiltersToggle();
    removeBorderFilter();
    initTopSlider();
    initTopSliderBtn();
    closeFilterSelectList();
    initScrollLock();
    initTooltipsList();
    initCounterList();
    initRadioButtons();
    initBasketInput();
    initMoreFilters();
    frizeLabelInit();
    initMap();
    initGalleryFancybox();
    promoCode();
    showInputOnChecked();
    sliderProduct();
    initOpenBlock();
    initRangeSlider();
    initShowCounter();
    initInfoBlockSlider();
    initOpenMore();
    showAllText();
    // openSubList();
    initOpenMoreReviews();
    deliveryReturn();
    initMoveTo();
    sliderList();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✔️

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

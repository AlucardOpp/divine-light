import {sliderInCard} from './slider-in-cards';
import {sliderCards} from './slider-cards';
import {headerCatalogSlider} from './header-catalog-slider';
import {sliderTabs} from './slider-tabs';
import {sliderCategories} from './slider-categories';
import {sliderIntro} from './slider-intro';
import {sliderBanners} from './slider-banners';
import {initMightLikeSliders} from './might-like-filters';
import {shoppingWidget} from './shopping-widget';
import {deliveryPointSlider} from './delivery-point-slider';
import {initPointGallery} from './init-point-gallery';

const initSliders = () => {
  headerCatalogSlider();
  sliderInCard();
  sliderCards();
  sliderTabs();
  sliderCategories();
  sliderIntro();
  sliderBanners();
  initMightLikeSliders();
  shoppingWidget();
  // deliveryPointSlider();
  // initPointGallery();
};

export {initSliders};

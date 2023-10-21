import {Map} from './map';

const initMap = () => {
  const map = new Map();
  setTimeout(() => {
    map.init();
  }, 1000);
};

export {initMap};

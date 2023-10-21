import 'regenerator-runtime/runtime';
import {pickupPointTemplate} from './pickup-point-template';
import {renderElement, createElement} from '../../utils/render';
import {initGalleryFancybox} from '../sliders/init-fancy-slider';
import {requestHTTP} from '../../utils/requestHTTP';
import {modals} from '../modals/init-modals';

export class Map {
  constructor() {
    this._pointsList = document.querySelector('[data-points-list]');
    this._pickupWrapper = document.querySelector('[data-pickup-wrapper]');
    this._mapContainer = document.querySelector('[data-pickup-map]');
    this._filterContainer = document.querySelector('[data-pickup-filter]');
    this._modalPointContainer = document.querySelector('[data-modal-point]');
    this._modalPoint = 'point-info';
    this._markerEmpty = './img/svg/marker-empty.svg';
    this._breakpoint = window.matchMedia('(max-width:767px)');
    this._centerMap = [55.76, 37.64];
    this._clusterNumbers = [100, 1000];
    this._maxCountRenderPoints = 30;
    this._zoomMap = 10;
    this._map = null;
    this._data = null;
    this._activePin = null;
    this._clusterer = null;
    this._geoObjects = [];
    this._currentGeoObjects = [];
    this._removingPoints = [];
    this._currentListPoints = [];
    this._filteredListPoints = [];
    this._onClickPin = this._onClickPin.bind(this);
    this._onFilterChange = this._onFilterChange.bind(this);
    this._breakpointChecker = this._breakpointChecker.bind(this);
  }

  async _getMarkersData() {
    const data = await requestHTTP('data/map-markers.json', (data) => {
      return data;
    });
    return data.markers;
  }

  _createPin(pinData) {
    // eslint-disable-next-line no-undef
    let myiconImageHref = pinData.icon;
    let MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div class="map__marker"></div>'
    );

    if (pinData.category === 'main') {
      myiconImageHref = '';
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        `<div class="map__main-marker">
          <svg width=${pinData.iconWidth} height=${pinData.iconHeight} aria-hidden="true">
            <use xlink:href="#${pinData.iconId}"></use>
          </svg>
        </div>`
      );
    }

    const pin = new ymaps.Placemark(pinData.location,
      {
        category: pinData.category,
        icon: pinData.icon,
        iconWidth: pinData.iconWidth,
        iconHeight: pinData.iconHeight,
        imageUrl: pinData.imageUrl,
        imageAlt: pinData.imageAlt,
        data: pinData.data,
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: myiconImageHref,
        // Размеры метки.
        iconImageSize: [pinData.iconWidth, pinData.iconHeight],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: pinData.offset,
        iconShape: {
          type: 'Rectangle',
          // Прямоугольник описывается в виде двух
          // точек - верхней левой и нижней правой.
          coordinates: pinData.coordsShape,
        },
        iconContentLayout: MyIconContentLayout,
      }
    );
    return pin;
  };

  _createPins(data) {
    let index = 0;
    data.forEach((obj) => {
      const placemark = this._createPin(obj);

      if (obj.category !== 'main') {
        this._geoObjects[index++] = placemark;
      }
    });

    if (!this._removingPoints.length) {
      this._currentGeoObjects = [...this._geoObjects];
    } else {
      this._filterObjects();
    }
  };

  _createCluster() {
    const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div class="clusterIcon">{{ properties.geoObjects.length }}</div>'
    );

    this._clusterer = new ymaps.Clusterer({
      clusterIcons: [
        {
          href: this._markerEmpty,
          size: [56, 56],
          offset: [-28, -28],
          shape: {
            type: 'Circle',
            coordinates: [0, 0],
            radius: 28,
          },
        },
        {
          href: this._markerEmpty,
          size: [80, 80],
          offset: [-40, -40],
          shape: {
            type: 'Circle',
            coordinates: [0, 0],
            radius: 40,
          },
        },
        {
          href: this._markerEmpty,
          size: [120, 120],
          offset: [-60, -60],
          shape: {
            type: 'Circle',
            coordinates: [0, 0],
            radius: 50,
          },
        }
      ],
      clusterNumbers: this._clusterNumbers,
      clusterIconContentLayout: MyIconContentLayout,
    });
  };

  _createClusterer() {
    if (this._clusterer) {
      this._map.geoObjects.remove(this._clusterer);
    }

    this._createCluster();
    this._clusterer.add(this._currentGeoObjects);
    this._map.geoObjects.add(this._clusterer);
    this._clusterer.events.add('click', this._onClickPin);
  }

  _addMainPin() {
    const dataMainMarker = this._data.filter((item) => item.category === 'main');
    this._mainMarker = this._createPin(dataMainMarker[0]);
    this._map.geoObjects.add(this._mainMarker);
    this._mainMarker.events.add('click', this._onClickPin);
  }

  _showListPoints() {
    this._pickupWrapper.classList.add('is-active');
    setTimeout(() => {
      this._map.container.fitToViewport();
    }, 600);
  }

  _hideListPoints() {
    this._pickupWrapper.classList.remove('is-active');
    setTimeout(() => {
      this._map.container.fitToViewport();
    }, 600);
  }

  _openModalInfo() {
    if (this._currentListPoints.length === 1) {
      this._modalPointContainer.innerHTML = '';

      this._currentListPoints.map((point) => {
        renderElement(this._modalPointContainer, createElement(pickupPointTemplate(point)));
      })

      initGalleryFancybox();

      modals.open(null, this._modalPoint);
    }
  }

  _renderPointsItems() {
    if (this._currentListPoints > this._maxCountRenderPoints) {
      return;
    }

    if (!this._removingPoints.length) {
      this._filteredListPoints = [...this._currentListPoints];
    } else {
      this._filterPoints();
    }

    this._pointsList.innerHTML = '';

    if (!this._pickupWrapper.classList.contains('is-active') && this._filteredListPoints.length) {
      this._showListPoints();
    } else if (!this._filteredListPoints.length) {
      this._hideListPoints();
      return;
    }

    this._filteredListPoints.map((point) => {
      renderElement(this._pointsList, createElement(pickupPointTemplate(point)));
    })

    initGalleryFancybox();
  };

  _setActiveMarker(placemark) {
    placemark.options.set({iconImageHref: './img/svg/marker-check.svg'});
    this._activePin = placemark;
  };

  _unsetActivePin() {
    if (this._activePin) {
      this._activePin.options.set({iconImageHref: './img/svg/marker.svg'});
    }
  }

  _changeActivePin(placemark) {
    if (this._currentListPoints.length > this._maxCountRenderPoints) {
      this._unsetActivePin();
    } else if (this._currentListPoints[0].category === 'main') {
      this._unsetActivePin();
    } else {
      this._unsetActivePin();
      this._setActiveMarker(placemark);
    }
  }

  _showInfoPoints() {
    this._renderPointsItems();
  }

  _changeCurrentListPoints(placemark) {
    this._currentListPoints = [];

    if (placemark.properties.get('geoObjects')) {
      const objects = placemark.properties.get('geoObjects');
      objects.map((obj) => {
        this._currentListPoints.push(obj.properties._data);
      })
    } else {
      this._currentListPoints.push(placemark.properties._data)
    }
  }

  _onClickPin(e) {
    const activePlacemark = e.get('target');

    this._changeCurrentListPoints(activePlacemark);

    if (this._mobileDevice) {
      this._openModalInfo();
    } else {
      this._showInfoPoints();
    }

    this._changeActivePin(activePlacemark);
    this._map.panTo(activePlacemark.geometry._coordinates)
  }

  _getRemovingPoints() {
    let newArr = [];
    const toggleInputs = this._filterContainer.querySelectorAll('input');
    toggleInputs.forEach((item) => {
      if (!item.checked) {
        newArr.push(item.name);
      }
    });
    this._removingPoints = [...newArr];
  }

  _filterObjects() {
    this._currentGeoObjects = this._geoObjects.filter((obj) => {
      return !this._removingPoints.includes(obj.properties.get('category'));
    });
  }

  _filterPoints() {
    this._filteredListPoints = this._currentListPoints.filter((point) => {
      return !this._removingPoints.includes(point.category);
    })
  }

  _onFilterChange() {
    this._getRemovingPoints();
    this._filterObjects();
    this._createClusterer();
    this._renderPointsItems();
  }

  _createFilter() {
    this._filterContainer.addEventListener('change', this._onFilterChange)
  }

  async _createMap() {
    this._data = await this._getMarkersData();

    window.ymaps.ready(() => {
      this._map = new window.ymaps.Map(this._mapContainer, {
        center: this._centerMap,
        zoom: this._zoomMap,
      });

      this._createPins(this._data);
      this._createClusterer();
      this._addMainPin();

    });
  }

  _breakpointChecker() {
    if (this._breakpoint.matches) {
      this._mobileDevice = true;
    } else {
      this._mobileDevice = false;
      if (this._modalPointContainer.closest('.modal').classList.contains('is-active')) {
        modals.close(this._modalPoint);
      }
      this._renderPointsItems();
    }
  }

  init() {
    if (!this._mapContainer) {
      return;
    }

    this._createMap();
    this._createFilter();

    this._breakpointChecker();
    this._breakpoint.addListener(this._breakpointChecker);
  }
}

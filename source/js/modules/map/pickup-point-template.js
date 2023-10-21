const createItemsTempate = (data, template) => {
  return data.map((item) => {
    return template(item);
  }).join('');
};

const metroStations = (metro) => {
  const metroItem = (data) => {
    return `
    <li class="delivery-point__metro-item"><span class="delivery-point__metro-station delivery-point__metro-station--${data.color}">${data.name}</span></li>`;
  };

  const content = createItemsTempate(metro, metroItem);

  return `
    <ul class="delivery-point__metro-list">
      ${content}
    </ul>`;
};

const createInfo = (info) => {
  const infoItem = (data) => {
    return `
    <span>${data}</span>`;
  };

  const content = createItemsTempate(info, infoItem);

  return `
  <div class="delivery-point__info">
    ${content}
  </div>`;
};

const createSlider = (images) => {
  const sliderItem = (data) => {
    return `
      <div class="swiper-slide" data-src="img/content/${data}.jpg">
        <picture>
          <source type="image/webp" srcset="img/content/${data}.webp, img/content/${data}@2x.webp 2x"><img src="img/content/${data}.jpg" srcset="img/content/${data}@2x.jpg 2x" width="60" height="60" alt="${data}">
        </picture>
      </div>`;
  };

  const content = createItemsTempate(images, sliderItem);

  return `
    <div class="delivery-point__slider swiper">
      <div class="swiper-wrapper">
        ${content}
      </div>
    </div>`;
};

const createDescription = (data) => {
  return `
  <p class="delivery-point__descr">${data}</p>`;
};

const pickupPointTemplate = (point) => {
  const data = point.data;
  const metro = data.metro.length ? metroStations(data.metro) : '';
  const info = data.info.length ? createInfo(data.info) : '';
  const descr = data.description ? createDescription(data.description) : '';
  const slider = data.images ? createSlider(data.images) : '';

  return `<div class="delivery-point" data-point-category=${point.category}>
            <h3 class="delivery-point__title">${data.title}</h3>
            <address class="delivery-point__address">${data.address}</address>
            ${metro}
            ${info}
            ${descr}
            ${slider}
            <button class="btn" type="button">Доставить сюда
            </button>
          </div>`;
};

export {pickupPointTemplate};

const initRangeSlider = () => {
  const rangeSlider = document.querySelector('[data-range-slider]');

  if (!rangeSlider) {
    return;
  }

  function updateSliderColorPips() {
    let pipsValues = rangeSlider.querySelectorAll('.noUi-value');
    const currentValue = rangeSlider.noUiSlider.get();

    pipsValues.forEach((element) => {
      let currentElementValue = element.dataset.value;
      if (currentElementValue <= currentValue) {
        element.previousSibling.classList.add('red');
      } else {
        element.previousSibling.classList.remove('red');
      }
    });
  }

  let max = parseInt(rangeSlider.dataset.max);
  let min = parseInt(rangeSlider.dataset.min);
  let step = parseInt(rangeSlider.dataset.step);


  function arrValues(min, max, step) {
    let arr = [];
    for (let k = min; k <= max; k = k + step) {
      arr.push(k);
    }
    return arr;
  }

  if (rangeSlider) {
    // eslint-disable-next-line no-undef
    noUiSlider.create(rangeSlider, {
      start: rangeSlider.dataset.start,
      step: parseInt(rangeSlider.dataset.step),
      connect: "lower",
      tooltips: true,
      range: {
        'min': parseInt(rangeSlider.dataset.min),
        'max': parseInt(rangeSlider.dataset.max),
      },
      pips: {
        mode: 'values',
        values: arrValues(min, max, step),
        density: rangeSlider.dataset.density,
      },
      tooltips: {
        to: function (value) {
          return Math.floor(value) + ` ${rangeSlider.dataset.units}`;
        },
        from: function (value) {
          return Number(value.replace(` ${rangeSlider.dataset.units}`, ''));
        }
      },

      format: {
        to: function (value) {
          return Math.floor(value);
        },
        from: function (value) {
          return Number(value.replace('', ''));
        }
      },
    });
    rangeSlider.noUiSlider.on('update', updateSliderColorPips);
  }
};

export {initRangeSlider};

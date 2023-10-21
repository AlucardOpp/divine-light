const sliders = document.querySelectorAll('.input-range-accordion__slider--no-step');
const stepSliders = document.querySelectorAll('.input-range-accordion__slider--step');

const initUiSlider = () => {
  if (!sliders) {
    return;
  }

  sliders.forEach((slider) => {
    const parent = slider.closest('.input-range-accordion__wrap');
    const inputMinPrice = parent.querySelector('.input-range-accordion__min-price');
    const inputMaxPrice = parent.querySelector('.input-range-accordion__max-price');
    const inputs = [inputMinPrice, inputMaxPrice];
    const min = Number(inputMinPrice.dataset.value);
    const max = Number(inputMaxPrice.dataset.value);

    const uiSlider = noUiSlider.create(slider, {
      range: {
        'min': [min],
        'max': [max],
      },
      start: [min, max],
      connect: [false, true, false],
    });

    slider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = (values[handle]).slice(0, -3);
    });

    inputs.forEach(function (input, handle) {

      input.addEventListener('change', function () {
        slider.noUiSlider.setHandle(handle, this.value);
      });

      input.addEventListener('keydown', function (e) {

        let values = slider.noUiSlider.get();
        let value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        let steps = slider.noUiSlider.steps();

        // [down, up]
        let step = steps[handle];

        let position;

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {
          case 13:
            slider.noUiSlider.setHandle(handle, this.value);
            break;
          case 38:
            // Get step to go increase slider value (up)
            position = step[1];

            // false = no step is set
            if (position === false) {
              position = 1;
            }

            // null = edge of slider
            if (position !== null) {
              slider.noUiSlider.setHandle(handle, value + position);
            }
            break;
          case 40:
            position = step[0];

            if (position === false) {
              position = 1;
            }

            if (position !== null) {
              slider.noUiSlider.setHandle(handle, value - position);
            }
            break;
        }
      });
    });

    const form = slider.closest('form');

    if (form) {
      const resetBtns = form.querySelectorAll('[type="reset"]');

      if (resetBtns.length) {
        resetBtns.forEach((resetBtn) => {
          resetBtn.addEventListener('click', () => {
            uiSlider.reset();
          });
        });
      }
    }
  });
};

export {initUiSlider};

const initUiStepSlider = () => {
  if (!sliders) {
    return;
  }

  stepSliders.forEach((slider) => {
    const parent = slider.closest('.input-range-accordion__wrap--step');
    const sliderStep = parent.dataset.step;
    const inputMinPrice = parent.querySelector('.input-range-accordion__min-price');
    const inputMaxPrice = parent.querySelector('.input-range-accordion__max-price');
    // const pipsSteps = document.querySelector('.input-range-accordion__steps');
    const inputs = [inputMinPrice, inputMaxPrice];
    const min = Number(inputMinPrice.dataset.value);
    const max = Number(inputMaxPrice.dataset.value);
    // const ten = max / 6;
    // const thirty = max / 6 * 2;
    // const fifty = max / 6 * 3;
    // const seventy = max / 6 * 4;
    // const ninety = max / 6 * 5;

    // console.log(parseFloat(sliderStep, 10));

    function filterPips(value) {
      // console.log(value)
      return (value % 2 === 0) ? 1 : -1;
    }

    const uiSlider = noUiSlider.create(slider, {
      range: {
        'min': [min],
        'max': [max],
      },
      start: [min, max],
      step: parseFloat(sliderStep, 10) || 1,
      pips: {
        mode: 'steps',
        density: 10,
        filter: filterPips,
        stepped: true,
      },
      connect: true,
    });

    slider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = (values[handle]).slice(0, -3);

      const markers = slider.querySelectorAll('.noUi-marker');
      const handleLower = slider.querySelector('.noUi-handle-lower');
      const handleUpper = slider.querySelector('.noUi-handle-upper');

      markers.forEach((marker) => {
        marker.classList.add('noUi-marker--active');

        if (marker.getBoundingClientRect().left < handleLower.getBoundingClientRect().left) {
          marker.classList.remove('noUi-marker--active');
        }

        if (marker.getBoundingClientRect().right > handleUpper.getBoundingClientRect().right) {
          marker.classList.remove('noUi-marker--active');
        }
      });
    });

    inputs.forEach(function (input, handle) {

      input.addEventListener('change', function () {
        slider.noUiSlider.setHandle(handle, this.value);
      });

      input.addEventListener('keydown', function (e) {

        let values = slider.noUiSlider.get();
        let value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        let steps = slider.noUiSlider.steps();

        // [down, up]
        let step = steps[handle];

        let position;

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {
          case 13:
            slider.noUiSlider.setHandle(handle, this.value);
            break;
          case 38:
            // Get step to go increase slider value (up)
            position = step[1];

            // false = no step is set
            if (position === false) {
              position = 1;
            }

            // null = edge of slider
            if (position !== null) {
              slider.noUiSlider.setHandle(handle, value + position);
            }
            break;
          case 40:
            position = step[0];

            if (position === false) {
              position = 1;
            }

            if (position !== null) {
              slider.noUiSlider.setHandle(handle, value - position);
            }
            break;
        }
      });
    });

    const form = slider.closest('form');

    if (form) {
      const resetBtns = form.querySelectorAll('[type="reset"]');

      if (resetBtns.length) {
        resetBtns.forEach((resetBtn) => {
          resetBtn.addEventListener('click', () => {
            uiSlider.reset();
          });
        });
      }
    }
  });
};

export {initUiStepSlider};

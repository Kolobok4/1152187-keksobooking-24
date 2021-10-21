const adForm = document.querySelectorAll('.ad-form');
const formFieldset = document.querySelectorAll('fieldset');

// eslint-disable-next-line no-unused-vars
const adFormDisabled = () => {
  adForm.forEach((element) => {
    element.classList.add('ad-form--disabled');
  });
  formFieldset.forEach((element) => {
    element.disabled = true;
  });
};

// eslint-disable-next-line no-unused-vars
const adFormEnabled = () => {
  adForm.forEach((element) => {
    element.classList.remove('ad-form--disabled');
  });
  formFieldset.forEach((element) => {
    element.disabled = false;
  });
};


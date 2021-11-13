import {addressAd, adForm} from '../form-validate.js';

const mapFilters = document.querySelector('.map__filters');
const disabledFields = document.querySelectorAll('select.map__filter, fieldset');

const setDisabledState = () => {
  disabledFields.forEach((element) => {
    element.disabled = !element.disabled;
  });
};

const toggleClassDisabled  = () => {
  adForm.classList.toggle('ad-form--disabled');
  mapFilters.classList.toggle('map__filters--disabled');

  setDisabledState();

  addressAd.readOnly = true;
};

toggleClassDisabled();

export {setDisabledState,toggleClassDisabled};


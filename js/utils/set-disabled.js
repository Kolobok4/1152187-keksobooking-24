import {addressAd, adForm} from '../form-validate.js';

const mapFilters = document.querySelector('.map__filters');
const disabledFields = document.querySelectorAll('select.map__filter, fieldset');

const setDisabledState = () => {
  disabledFields.forEach((element) => {
    element.disabled = !element.disabled;
  });
};

const toggleFormsDisabled  = () => {
  adForm.classList.toggle('ad-form--disabled');
  setDisabledState();
  addressAd.readOnly = true;
};

const toggleFiltersDisabled  = () => {
  mapFilters.classList.toggle('map__filters--disabled');
};


toggleFormsDisabled();
toggleFiltersDisabled();

export {setDisabledState,toggleFormsDisabled, toggleFiltersDisabled, mapFilters};

